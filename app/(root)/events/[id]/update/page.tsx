import { auth } from "@clerk/nextjs";
import React from "react";

const UpdateJunction = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as String;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <h3 className="wrapper font-bold text-center ">Update Junctions</h3>
      </section>
      <div className="my-8"></div>
    </>
  );
};

export default UpdateJunction;
