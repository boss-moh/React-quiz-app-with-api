import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gradient-to-l from-theme-from to-theme-to">
      <div className="bg-theme-bg text-white text-base p-5 min-h-[400px]  min-w-[350px] w-[400px] rounded-lg flex justify-center items-center ">
        {children}
      </div>
    </div>
  );
};
