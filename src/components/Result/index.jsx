import React from "react";
import { Message } from "../../components";
import accept from "../../assets/accept.svg";
import faild from "../../assets/faild.svg";

export const Result = ({ children, total, result }) => {
  let isAccepted = result > Math.floor(0.5 * total) ? true : false;
  return (
    <>
      {isAccepted ? (
        <Message
          src={accept}
          alt="accept image">
          <span className="text-green-500">{children}</span>
        </Message>
      ) : (
        <Message
          src={faild}
          alt="faild image">
          <span className="text-red-500">{children}</span>
        </Message>
      )}
    </>
  );
};

export default Result;
