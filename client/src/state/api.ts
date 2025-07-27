import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import {
  Application,
  Booking,
  Contractor,
  Customer,
  Manager,
  Payment,
} from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [
    "Managers",
    "Customers",
    "Contractors",
    "ContractorDetails",
    "Bookings",
    "Payments",
    "Applications",
  ],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint =
            userRole === "manager"
              ? `/managers/${user.userId}`
              : `/customers/${user.userId}`;

          let userDetailsResponse = await fetchWithBQ(endpoint);

          // if user doesn't exist, create new user
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            );
          }

          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as Customer | Manager,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      },
    }),

    // Manager
    createContractor: build.mutation<Contractor, FormData>({
      query: (newContractor) => ({
        url: `contractors`,
        method: "POST",
        body: newContractor,
      }),
      invalidatesTags: (result) => [
        { type: "Contractors", id: "LIST" },
        { type: "Managers", id: result?.manager?.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Contractor created successfully!",
          error: "Failed to create Contractor.",
        });
      },
    }),

    getManagerContractors: build.query<Contractor[], string>({
      query: (cognitoId) => `managers/${cognitoId}/contractors`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contractors" as const, id })),
              { type: "Contractors", id: "LIST" },
            ]
          : [{ type: "Contractors", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load manager contractors.",
        });
      },
    }),

    updateManagerSettings: build.mutation<
      Manager,
      { cognitoId: string } & Partial<Manager>
    >({
      query: ({ cognitoId, ...updatedManager }) => ({
        url: `managers/${cognitoId}`,
        method: "PUT",
        body: updatedManager,
      }),
      invalidatesTags: (result) => [{ type: "Managers", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Settings updated successfully!",
          error: "Failed to update settings.",
        });
      },
    }),

    // contractor related endpoints
    getContractors: build.query<
      Contractor[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          location: filters.location,
          priceMin: filters.priceRange?.[0],
          priceMax: filters.priceRange?.[1],
          teamSize: filters.teamSize,
          serviceAreaCoverage: filters.serviceAreaCoverage,
          contractorType: filters.contractorType,
          yearsOfExperienceMin: filters.yearsOfExperience?.[0],
          yearsOfExperienceMax: filters.yearsOfExperience?.[1],
          amenities: filters.amenities?.join(","),
          availableFrom: filters.availableFrom,
          favoriteIds: filters.favoriteIds?.join(","),
          latitude: filters.coordinates?.[1],
          longitude: filters.coordinates?.[0],
        });

        return { url: "contractors", params };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contractors" as const, id })),
              { type: "Contractors", id: "LIST" },
            ]
          : [{ type: "Contractors", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch contractors.",
        });
      },
    }),

    getContractor: build.query<Contractor, number>({
      query: (id) => `contractors/${id}`,
      providesTags: (result, error, id) => [{ type: "ContractorDetails", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load Contractor details.",
        });
      },
    }),

    // customer related endpoints
    getCustomer: build.query<Customer, string>({
      query: (cognitoId) => `customers/${cognitoId}`,
      providesTags: (result) => [{ type: "Customers", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load user customer profile.",
        });
      },
    }),

    updateCustomerSettings: build.mutation<
      Customer,
      { cognitoId: string } & Partial<Customer>
    >({
      query: ({ cognitoId, ...updatedCustomer }) => ({
        url: `customers/${cognitoId}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: (result) => [{ type: "Customers", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Settings updated successfully!",
          error: "Failed to update settings.",
        });
      },
    }),

    addFavoriteContractor: build.mutation<
      Customer,
      { cognitoId: string; contractorId: number }
    >({
      query: ({ cognitoId, contractorId }) => ({
        url: `customers/${cognitoId}/favorites/${contractorId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Customers", id: result?.id },
        { type: "Contractors", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Added to favorites!!",
          error: "Failed to add to favorites",
        });
      },
    }),

    removeFavoriteContractor: build.mutation<
      Customer,
      { cognitoId: string; contractorId: number }
    >({
      query: ({ cognitoId, contractorId }) => ({
        url: `customers/${cognitoId}/favorites/${contractorId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Customers", id: result?.id },
        { type: "Contractors", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Removed from favorites!",
          error: "Failed to remove from favorites.",
        });
      },
    }),

    getServiceRecords: build.query<Contractor[], string>({
      query: (cognitoId) => `customers/${cognitoId}/service-records`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contractors" as const, id })),
              { type: "Contractors", id: "LIST" },
            ]
          : [{ type: "Contractors", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch service records.",
        });
      },
    }),

    // Application
    createApplication: build.mutation<Application, Partial<Application>>({
      query: (body) => ({
        url: `applications`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Applications"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Application created successfully!",
          error: "Failed to create applications.",
        });
      },
    }),

    // Bookings
    getBookings: build.query<Booking[], number>({
      query: () => "bookings",
      providesTags: ["Bookings"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch Bookings.",
        });
      },
    }),

    getContractorBookings: build.query<Booking[], number>({
      query: (contractorId) => `contractors/${contractorId}/bookings`,
      providesTags: ["Bookings"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch contractor bookings.",
        });
      },
    }),

    getPayments: build.query<Payment[], number>({
      query: (bookingId) => `bookings/${bookingId}/payments`,
      providesTags: ["Payments"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch payment info.",
        });
      },
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  useCreateContractorMutation,
  useGetManagerContractorsQuery,
  useUpdateManagerSettingsMutation,
  useGetContractorsQuery,
  useGetCustomerQuery,
  useUpdateCustomerSettingsMutation,
  useAddFavoriteContractorMutation,
  useRemoveFavoriteContractorMutation,
  useGetContractorQuery,
  useCreateApplicationMutation,
  useGetServiceRecordsQuery,
  useGetBookingsQuery,
  useGetContractorBookingsQuery,
  useGetPaymentsQuery,
} = api;
