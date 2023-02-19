import React from "react";
import svgError from "../../assets/error.svg";
import { Message } from "../../components";

export const Error = ({ children = "Error", alt = "no image" }) => {
  return (
    <Message
      src={svgError}
      alt={alt}>
      {children}
    </Message>
  );
};
