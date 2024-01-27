import { auth } from "@clerk/nextjs";
import EventForm from "@/components/shared/EventForm";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateJunction = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Create Junction</h3>
        </div>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateJunction;
