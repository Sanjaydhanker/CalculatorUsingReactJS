import React from "react";

function Buttons({ allButtonName, handleOnClick }) {
  return (
    <div className="flex flex-wrap justify-around">
      {allButtonName.map((btn) => {
        return (
          <button
            key={btn}
            type="button"
            onClick={() => handleOnClick(btn)}
            className=" size-[60px] rounded m-2 bg-slate-100 hover:bg-slate-200 cursor-pointer text-xl font-bold text-indigo-600"
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
