import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import JunctionForm from "@/components/shared/JunctionForm";

export const metadata: Metadata = {
  title: "Create Junctions",
  description:
    "Create a junction or events with juncify. Create a best junctions or events in your city. Earn extra income by offering your unique services from your chosen location! ",
};

const CreateJunction = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Create</h3>
        </div>
      </section>
      <div className="wrapper my-8">
        <JunctionForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateJunction;
