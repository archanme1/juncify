import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full relative flex justify-center mt-12">
      <div className="absolute animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-700"></div>
      {/* <Image
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        alt="Loading"
        height={52}
        width={52}
        className="rounded-full "
      /> */}
    </div>
  );
};

export default Loading;
