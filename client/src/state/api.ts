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
    "Posts",
    "Users",
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

    deleteManagedContractor: build.mutation<
      Contractor,
      { cognitoId: string; contractorId: number }
    >({
      query: ({ contractorId, cognitoId }) => ({
        url: `/contractors/${contractorId}/managers/${cognitoId}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Managers", id: result?.id },
        { type: "Contractors", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Contractor has been removed!!",
          error: "Failed to remove contractor",
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

    // application related endpoints
    getApplications: build.query<
      Application[],
      { userId?: string; userType?: string }
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        if (params.userId) {
          queryParams.append("userId", params.userId.toString());
        }
        if (params.userType) {
          queryParams.append("userType", params.userType);
        }

        return `applications?${queryParams.toString()}`;
      },
      providesTags: ["Applications"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch applications.",
        });
      },
    }),

    updateApplicationStatus: build.mutation<
      Application & { booking?: Booking },
      { id: number; status: string }
    >({
      query: ({ id, status }) => ({
        url: `applications/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Applications", "Bookings"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Application status updated successfully!",
          error: "Failed to update application settings.",
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

    // GET all posts
    getPosts: build.query({
      query: ({
        userId,
        userProfileId,
        filterType = "foryou",
      }: {
        userId: string;
        userProfileId?: string;
        filterType?: "foryou" | "following" | "otherjunction";
      }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("userId", userId.toString());
        if (userProfileId) queryParams.append("userProfileId", userProfileId);
        queryParams.append("filterType", filterType);
        return `posts?${queryParams.toString()}`;
      },
      providesTags: (result) => {
        if (!result) return [{ type: "Posts", id: "LIST" }];

        // handle both result = [] or result = { posts: [] }
        const posts = Array.isArray(result) ? result : result.posts;

        if (!Array.isArray(posts)) {
          // fallback when backend sends empty or unexpected data
          return [{ type: "Posts", id: "LIST" }];
        }

        return [
          ...posts.map(({ id }) => ({ type: "Posts" as const, id })),
          { type: "Posts", id: "LIST" },
        ];
      },
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch posts.",
        });
      },
    }),

    //GET SINGLE POST by USERNAME AND POST>ID
    getPost: build.query({
      query: ({
        username,
        postId,
        userId,
      }: {
        username: string;
        postId: string | number;
        userId?: string;
      }) => {
        const queryParams = new URLSearchParams();
        if (userId) queryParams.append("userId", userId);

        return `posts/post/${username}/${postId}?${queryParams.toString()}`;
      },
      providesTags: (result, error, { postId }) => [
        { type: "Posts", id: postId },
      ],

      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch post.",
        });
      },
    }),

    //GET USER PROFILE
    getUserProfile: build.query({
      query: ({ username, userId }: { username: string; userId: string }) => {
        const queryParams = new URLSearchParams();

        if (userId) queryParams.append("userId", userId);

        return `posts/${username}?${queryParams.toString()}`;
      },
    }),

    // GET FRIEND RECCOMMENDATION
    getFriendRecommendations: build.query({
      query: ({ userId }: { userId: string }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("userId", userId);
        return `friends/recommendations?${queryParams.toString()}`;
      },
    }),

    // UPDATE INTERACTION
    updatePostInteraction: build.mutation({
      query: ({
        formattedUserId,
        postId,
        type,
      }: {
        formattedUserId: string;
        postId: number;
        type: "like" | "repost" | "save";
      }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("userId", formattedUserId);
        queryParams.append("postId", postId.toString());
        queryParams.append("type", type);

        return {
          url: `posts/interact?${queryParams.toString()}`,
          method: "POST",
        };
      },
      invalidatesTags: (result) => [{ type: "Posts", id: result?.post?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await withToast(Promise.resolve(), { success: data.success });
        } catch {
          await withToast(Promise.reject(), {
            error: "Failed to update interaction!",
          });
        }
      },
    }),

    // ADD COMMENT
    addComment: build.mutation({
      query: ({
        userId,
        postId,
        desc,
      }: {
        userId: string;
        postId: string;
        desc: string;
      }) => ({
        url: `posts/comment`,
        method: "POST",
        body: { userId, postId, desc },
      }),

      invalidatesTags: (result, error, { postId }) => [
        { type: "Posts", id: postId },
        { type: "Posts", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Add comment failed:", err);
        }
      },
    }),

    // CREATE POST
    createPost: build.mutation({
      query: ({ userId, desc }: { userId: string; desc: string }) => ({
        url: `posts/create`,
        method: "POST",
        body: { userId, desc },
      }),
      invalidatesTags: () => [{ type: "Posts", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Add post failed:", err);
        }
      },
    }),

    toggleFollowUser: build.mutation({
      query: ({
        username, // profile username (e.g., "tony.smith")
        followerCognitoId, // logged-in user's cognitoId
      }: {
        username: string;
        followerCognitoId: string;
      }) => ({
        url: `posts/follow`,
        method: "POST",
        body: { username, followerCognitoId },
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await withToast(Promise.resolve(), { success: data.action });
        } catch {
          await withToast(Promise.reject(), {
            error: "Failed to follow/unfollow!",
          });
        }
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
  useGetServiceRecordsQuery,
  useGetBookingsQuery,
  useGetContractorBookingsQuery,
  useGetPaymentsQuery,
  useCreateApplicationMutation,
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
  useDeleteManagedContractorMutation,
  useGetPostsQuery,
  useGetUserProfileQuery,
  useGetFriendRecommendationsQuery,
  useGetPostQuery,
  useUpdatePostInteractionMutation,
  useAddCommentMutation,
  useCreatePostMutation,
  useToggleFollowUserMutation,
} = api;
