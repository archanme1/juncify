"use client";

import React from "react";
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

const NewContractor = () => {
  const [createContractor] = useCreateContractorMutation();
  const { data: authUser } = useGetAuthUserQuery();

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

  const onSubmit = async (data: ContractorFormData) => {
    if (!authUser?.cognitoInfo?.userId) {
      throw new Error("No manager ID found");
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "photoUrls") {
        const files = value as File[];
        files.forEach((file: File) => {
          formData.append("photos", file);
        });
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("managerCognitoId", authUser.cognitoInfo.userId);

    await createContractor(formData);
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
                Additional Information
              </h2>
              <CustomFormField name="address" label="Address" />
              <div className="flex justify-between gap-4">
                <CustomFormField name="city" label="City" className="w-full" />
                <CustomFormField
                  name="state"
                  label="State"
                  className="w-full"
                />
                <CustomFormField
                  name="postalCode"
                  label="Postal Code"
                  className="w-full"
                />
              </div>
              <CustomFormField name="country" label="Country" />
            </div>

            <Button
              type="submit"
              className="bg-secondary-500 font-bold text-white w-full mt-8 cursor-pointer"
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
