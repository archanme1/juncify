"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  useGetAuthUserQuery,
  useDeleteManagedContractorMutation,
} from "@/state/api";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractorId: number;
}

const DeleteApplicationModal = ({
  isOpen,
  onClose,
  contractorId,
}: ApplicationModalProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const [deleteManagedContractor] = useDeleteManagedContractorMutation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!authUser || authUser.userRole !== "manager") {
      console.error(
        "You must be logged in as a manager to delete a contractor"
      );
      return;
    }

    try {
      await deleteManagedContractor({
        contractorId,
        cognitoId: authUser?.cognitoInfo?.userId,
      }).unwrap();

      onClose();
    } catch (error: any) {
      console.error("Failed to delete contractor:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader className="mb-4">
          <DialogTitle>
            Are you sure you want to delete this contractor?
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-5">
          <Button
            type="submit"
            className="bg-secondary-500 text-white w-full cursor-pointer"
          >
            Confirm Delete
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onClose}
          >
            Cancel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteApplicationModal;
