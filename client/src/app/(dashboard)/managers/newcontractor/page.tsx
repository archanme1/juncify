"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFormField } from "@/components/FormField";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ContractorFormData, contractorSchema } from "@/lib/schemas";
import { useCreateContractorMutation, useGetAuthUserQuery } from "@/state/api";
import {
  AmenityEnum,
  HighlightEnum,
  ContractorTypeEnum,
} from "@/lib/constants";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const AddressSearchBox = dynamic(
  () => import("@/components/AddressSearchBox"),
  {
    ssr: false, //  disables server-side rendering for this component
  },
);

// FOR GOOGLE DEVELOPER API WAY
// interface FormValues {
//   address: string;
//   city: string;
//   state: string;
//   postalCode: string;
// }

const NewContractor = () => {
  const [createContractor] = useCreateContractorMutation();
  const { data: authUser } = useGetAuthUserQuery();
  const { location } = useGeoLocation();
  const router = useRouter();

  // console.log("auth user: ", authUser);

  const form = useForm<ContractorFormData>({
    resolver: zodResolver(contractorSchema),
    defaultValues: {
      name: "",
      description: "",
      hourlyRate: 100,
      advancePayment: 500,
      installationFee: 1000,
      isEmergencyAvailable: true,
      offersOnSiteParking: true,
      photoUrls: [],
      amenities: "",
      highlights: "",
      teamSize: 1,
      yearsOfExperience: 1,
      serviceAreaCoverage: 1000000,
      address: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    },
  });

  // FOR WATCHING MY FILE
  // const watchedPhotos = form.watch("photoUrls");

  // useEffect(() => {
  //   if (!watchedPhotos?.length) return;

  //   console.log("🟡 FILES CURRENTLY SELECTED");

  //   watchedPhotos.forEach((file: File) => {
  //     console.log({
  //       name: file.name,
  //       type: file.type,
  //       size: file.size,
  //     });
  //   });
  // }, [watchedPhotos]);

  const { reset } = form;
  useEffect(() => {
    if (location?.city && location?.country) {
      reset((prev) => ({
        ...prev,
        address: location.address ?? "",
        city: location.city ?? "",
        state: location.region ?? "",
        country: location.country ?? "",
        postalCode: location.postalCode ?? "",
      }));
    }
  }, [location, reset]);

  // FOR GOOGLE DEVELOPER API WAY
  // const handleLocationSelect = (details: {
  //   address: string;
  //   city: string;
  //   state: string;
  //   postalCode: string;
  //   country: string;
  //   fullAddress: string;
  // }) => {
  //   form.setValue("address", details.address, { shouldValidate: true });
  //   form.setValue("city", details.city, { shouldValidate: true });
  //   form.setValue("state", details.state, { shouldValidate: true });
  //   form.setValue("postalCode", details.postalCode, { shouldValidate: true });
  //   form.setValue("country", details.country, { shouldValidate: true });
  // };

  // ❓
  // const onSubmit = async (data: ContractorFormData) => {
  //   if (!authUser?.cognitoInfo?.userId) {
  //     throw new Error("No manager ID found");
  //   }

  //   const formData = new FormData();
  //   Object.entries(data).forEach(([key, value]) => {
  //     if (key === "photoUrls") {
  //       const files = value as File[];
  //       console.log(files);

  //       files.forEach((file: File) => {
  //         formData.append("photos", file);
  //       });
  //     } else if (Array.isArray(value)) {
  //       formData.append(key, JSON.stringify(value));
  //     } else {
  //       formData.append(key, String(value));
  //     }
  //   });

  //   formData.append("managerCognitoId", authUser.cognitoInfo.userId);

  //   try {
  //     await createContractor(formData);

  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     router.push("/managers/contractors");
  //   } catch (error) {
  //     console.log("Failed to create contractor:", error);
  //   }
  // };

  const onSubmit = async (data: ContractorFormData) => {
    if (!authUser?.cognitoInfo?.userId) {
      throw new Error("No manager ID found");
    }

    try {
      const files = data.photoUrls as File[];

      // Ask backend for presigned URLs
      const presignedResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/presigned-url`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            files: files.map((file) => ({
              fileName: file.name,
              fileType: file.type,
            })),
          }),
        },
      );

      const presignedUrls = await presignedResponse.json();

      // Upload files directly to S3
      await Promise.all(
        presignedUrls.map((item: any, index: number) =>
          fetch(item.uploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": files[index].type,
            },
            body: files[index],
          }),
        ),
      );

      // Extract final S3 URLs
      const uploadedPhotoUrls = presignedUrls.map((item: any) => item.fileUrl);

      // Create contractor with URLs only
      await createContractor({
        ...data,
        photoUrls: uploadedPhotoUrls,
        managerCognitoId: authUser.cognitoInfo.userId,
      });

      router.push("/managers/contractors");
    } catch (error) {
      console.error("Failed to create contractor:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Header
        title="Add New Contractor"
        subtitle="Create a new contractor with detailed information"
      />
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-10"
          >
            {/* Basic Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              <div className="space-y-4">
                <CustomFormField name="name" label="Contractor Name" />
                <CustomFormField
                  name="description"
                  label="Description"
                  type="textarea"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Fees */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Fees</h2>
              <CustomFormField
                name="hourlyRate"
                label="Hourly Rate"
                type="number"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CustomFormField
                  name="advancePayment"
                  label="Advance Payment"
                  type="number"
                />
                <CustomFormField
                  name="installationFee"
                  label="Installation Fee"
                  type="number"
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Contractor Details */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Contractor Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CustomFormField
                  name="teamSize"
                  label="Number of Team Members"
                  type="number"
                />
                <CustomFormField
                  name="serviceAreaCoverage"
                  label="Service Area Coverage from PIN"
                  type="number"
                />
                <CustomFormField
                  name="yearsOfExperience"
                  label="Years of Experience"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <CustomFormField
                  name="isEmergencyAvailable"
                  label="Emergency Call Available"
                  type="switch"
                />
                <CustomFormField
                  name="offersOnSiteParking"
                  label="Offers Parking in Site"
                  type="switch"
                />
              </div>
              <div className="mt-4">
                <CustomFormField
                  name="contractorType"
                  label="Contractor Type"
                  type="select"
                  options={Object.keys(ContractorTypeEnum).map((type) => ({
                    value: type,
                    label: type,
                  }))}
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Amenities and Highlights */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Amenities and Highlights
              </h2>
              <div className="space-y-6">
                <CustomFormField
                  name="amenities"
                  label="Amenities"
                  type="select"
                  options={Object.keys(AmenityEnum).map((amenity) => ({
                    value: amenity,
                    label: amenity,
                  }))}
                />
                <CustomFormField
                  name="highlights"
                  label="Highlights"
                  type="select"
                  options={Object.keys(HighlightEnum).map((highlight) => ({
                    value: highlight,
                    label: highlight,
                  }))}
                />
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Photos */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Photos</h2>
              <CustomFormField
                name="photoUrls"
                label="Contractors Photos"
                type="file"
                accept="image/*"
              />
            </div>

            <hr className="my-6 border-gray-200" />

            {/* Additional Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">
                Contractor Service Location
              </h2>
              <AddressSearchBox
                onSelect={(feature) => {
                  // Extract values safely from the feature
                  const props = feature.features?.[0]?.properties || {};
                  const context = props.context || {};

                  const address =
                    props.address ||
                    `${context.address?.address_number ?? ""} ${
                      context.address?.street_name ?? props.name ?? ""
                    }`.trim();

                  const city =
                    context.place?.name ||
                    context.locality?.name ||
                    context.district?.name ||
                    "";

                  const state = context.region?.name || "";
                  const postalCode = context.postcode?.name || "";
                  const country = context.country?.name || "";

                  form.setValue("address", address, { shouldValidate: true });
                  form.setValue("city", city, { shouldValidate: true });
                  form.setValue("state", state, { shouldValidate: true });
                  form.setValue("postalCode", postalCode, {
                    shouldValidate: true,
                  });
                  form.setValue("country", country, { shouldValidate: true });
                }}
              />
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <LocationAutocomplete onSelect={handleLocationSelect} />
              </div> */}
              <CustomFormField name="address" label="Address" disabled />

              <div className="flex justify-between gap-4 ">
                <CustomFormField
                  name="city"
                  label="City"
                  className="w-full "
                  disabled
                />
                <CustomFormField
                  name="state"
                  label="State"
                  className="w-full"
                  disabled
                />
                <CustomFormField
                  name="postalCode"
                  label="Postal Code"
                  className="w-full"
                  disabled
                />
              </div>
              <CustomFormField name="country" label="Country" disabled />
            </div>

            <Button
              type="submit"
              className="bg-secondary-600 font-bold text-white w-full mt-8 cursor-pointer "
            >
              Create Contractor
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewContractor;
