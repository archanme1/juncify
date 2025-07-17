"use client";

import React from "react";
import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
} from "@/state/api";

const ManagerSettings = () => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  // Name whatever and call this as a function which invokes useUpdateManagerSettingsMutation
  const [updateManager] = useUpdateManagerSettingsMutation();

  if (authLoading) return <Loading />;

  const handleSubmit = async (data: typeof initialData) => {
    await updateManager({
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
      userType="manager"
      initialData={initialData}
      onSubmit={handleSubmit}
    />
  );
};

export default ManagerSettings;
