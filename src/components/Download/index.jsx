import React from "react";
import { Message } from "../../components";

export const Download = () => {
  return (
    <Message withoutImage={false}>
      <div
        className="animate-spin-slow w-[100px] h-[100px]
      rounded-full border-8 border-y-white border-x-transparent  flex justify-center items-center
      ">
        <div
          className="animate-spin  w-16 h-16
      rounded-full border-8 border-y-white border-x-transparent 
      "></div>
      </div>
      <p className="mt-10">Download . . .</p>
    </Message>
  );
};
