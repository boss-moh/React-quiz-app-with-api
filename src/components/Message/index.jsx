import React from "react";

export const Message = ({
  src = "",
  alt = "no image ",
  withoutImage = true,
  children,
}) => {
  return (
    <div className=" flex flex-col items-center justify-center  ">
      {withoutImage && (
        <img
          src={src}
          alt={alt}
          className="min-w-[100px]"
        />
      )}

      <h2 className="py-5 text-center text-xl capitalize">{children}</h2>
    </div>
  );
};

export default Message;
