import Leftbar from "@/components/Leftbar";
import Rightbar from "@/components/Rightbar";
import React from "react";

const page = () => {
  return (
    <div className="dashboard-container">
      {/* <Header
        title="🚧 The Junction Rises Soon..."
        subtitle="This section is currently under development. Updates will be rolling out soon — stay tuned."
      /> */}

      <div className="flex ">
        <div className="flex-3 px-2 xsm:px-4 xxl:px-8 ">
          <Leftbar />
        </div>
        <div className="hidden lg:flex  ml-4 md:ml-8 flex-1 ">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default page;
