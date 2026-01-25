import React from "react";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";

const Contact = ({ onOpenModal }: ContactWidgetProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();

  const handleButtonClick = () => {
    if (authUser) {
      onOpenModal();
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Property */}
      {/* <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="flex items-center p-4 bg-primary-900 rounded-full">
          <Send className="text-primary-50" size={15} />
        </div>
        <div>
          <p>Contact This Contractor</p>
          <div className="text-lg font-bold text-primary-800">
            (987) 654-3210
          </div>
        </div>
      </div> */}
      <Button
        className="w-full cursor-pointer bg-secondary-500 text-white hover:bg-primary-700"
        onClick={handleButtonClick}
      >
        {authUser ? "Submit Application" : "Sign In to Apply"}
      </Button>

      {/* <hr className="my-4" />
      <div className="text-sm">
        <div className="text-primary-700 mb-1">Language: English.</div>
        <div className="text-green-700">Open to appointment</div>
      </div> */}
    </div>
  );
};

export default Contact;
