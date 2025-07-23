import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { ApplicationFormData, applicationSchema } from "@/lib/schemas";
import { useCreateApplicationMutation, useGetAuthUserQuery } from "@/state/api";

const ApplicationModal = ({
  isOpen,
  onClose,
  contractorId,
}: ApplicationModalProps) => {
  const [createApplication] = useCreateApplicationMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: authUser?.userInfo.name,
      email: authUser?.userInfo.email,
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!authUser || authUser.userRole !== "customer") {
      console.error(
        "You must be logged in as a customer to submit an application"
      );
      return;
    }
    await createApplication({
      ...data,
      applicationDate: new Date().toISOString(),
      status: "Pending",
      contractorId: contractorId,
      customerCognitoId: authUser.cognitoInfo.userId,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white ">
        <DialogHeader className="mb-4">
          <DialogTitle>Submit Application</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              name="name"
              label="Name"
              type="text"
              placeholder="Enter your full name"
              disabled={true}
            />
            <CustomFormField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email address"
              disabled={true}
            />
            <CustomFormField
              name="phoneNumber"
              label="Phone Number"
              type="text"
              placeholder="Enter your phone number"
            />
            <CustomFormField
              name="message"
              label="Message (Optional)"
              type="textarea"
              placeholder="Enter additional information about your job"
            />
            <Button
              type="submit"
              className="bg-secondary-500 text-white w-full cursor-pointer"
            >
              Submit Application
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
