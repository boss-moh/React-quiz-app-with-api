import React from "react";

export const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={className}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
