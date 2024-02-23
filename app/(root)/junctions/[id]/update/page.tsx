import JunctionForm from "@/components/shared/JunctionForm";
import { getJunctionById } from "@/lib/actions/junction.actions";
import { auth } from "@clerk/nextjs";

type UpdateJunctionProps = {
  params: {
    id: string;
  };
};

const UpdateJunction = async ({ params: { id } }: UpdateJunctionProps) => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const junction = await getJunctionById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Junction
        </h3>
      </section>

      <div className="wrapper my-8">
        <JunctionForm
          type="Update"
          junction={junction}
          junctionId={junction._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default UpdateJunction;
