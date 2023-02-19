import React, { useState } from "react";
import { Controls, Question } from "../../components";

export const FormLayout = ({ data, onSubmit }) => {
  // index for current Question
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleMove(count) {
    setIndex(index + count);
  }

  function handleSubmit() {
    handleMove(0);
    onSubmit(answers);
  }

  function handleSelect(e) {
    answers[index] = e.target.value;
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full">
      <Question
        question={data[index]}
        onChange={handleSelect}
        whoSelected={answers[index]}
      />

      <Controls
        index={index}
        length={data.length}
        onMove={handleMove}
        OnSubmit={handleSubmit}
      />
    </form>
  );
};

export default FormLayout;
