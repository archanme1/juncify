"use client";

import React from "react";
import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateCustomerSettingsMutation,
} from "@/state/api";

const CustomerSettings = () => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  // Name whatever and call this as a function which invokes useUpdateCustomerSettingsMutation
  const [updateCustomer] = useUpdateCustomerSettingsMutation();

  if (authLoading) return <Loading />;

  const handleSubmit = async (data: typeof initialData) => {
    await updateCustomer({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  return (
    <SettingsForm
      userType="customer"
      initialData={initialData}
      onSubmit={handleSubmit}
    />
  );
};

export default CustomerSettings;
