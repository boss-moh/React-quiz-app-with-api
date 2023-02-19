import React from "react";
import { Button } from "../../components";

export const Controls = ({ index, length, onMove, OnSubmit }) => {
  const classes = {
    button:
      " text-lg uppercase border-[3px] py-3 px-6 transition-all rounded-md disabled:hover:cursor-not-allowed ",
    buttonPrev: " hover:bg-slate-600  hover:border-slate-400 ",
    buttonSubmit: " hover:bg-blue-500  hover:border-blue-300",
  };
  return (
    <div className="flex justify-between mt-5">
      <button
        className={` ${classes.button} ${classes.buttonPrev} `}
        onClick={() => onMove(-1)}
        disabled={index == 0}>
        prev
      </button>
      {index !== length - 1 ? (
        <Button
          onClick={() => onMove(1)}
          className={` ${classes.button} ${classes.buttonSubmit}`}>
          next
        </Button>
      ) : (
        <Button
          onClick={OnSubmit}
          className={` ${classes.button} ${classes.buttonSubmit}`}>
          Submit
        </Button>
      )}
    </div>
  );
};

export default Controls;
