import React from "react";

export const Option = ({
  id,
  name,
  children,
  className = "",
  type = "radio",
  ...rest
}) => {
  return (
    <div className={className + " relative "}>
      <input
        id={id}
        type={type}
        name={name}
        {...rest}
        className={"hidden peer"}
      />

      <span className="w-5 h-5 border-2 absolute top-1/2 left-4 -translate-y-1/2 peer-checked:!block "></span>
      <span className="w-3 h-3 bg-white absolute top-1/2 left-5 -translate-y-1/2 hidden peer-checked:!block"></span>

      <label
        htmlFor={id}
        className=" p-2 px-12 block z-20 relative ">
        {children}
      </label>
    </div>
  );
};

export default Option;
