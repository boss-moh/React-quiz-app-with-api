import React from "react";
import Option from "./Option";

export const Question = ({ question, onChange, whoSelected = null }) => {
  const classes = [
    "bg-gradient-to-l to-options-one-to from-options-one-to ",
    "bg-gradient-to-l to-options-two-to from-options-two-from ",
    "bg-gradient-to-l to-options-there-to from-options-there-from ",
    "bg-gradient-to-l  from-options-four-from to-options-four-from",
  ];
  return (
    <div className="w-full h-full">
      <h2 className="py-5 text-center text-xl">{question.title}</h2>
      <div className="py-5  flex flex-col gap-3">
        {question.options.map((option, index) => (
          <Option
            key={option}
            id={option}
            name={question.title}
            value={option}
            onChange={onChange}
            className={classes[index % classes.length]}
            defaultChecked={whoSelected == option}>
            {option}
          </Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
