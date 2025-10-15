import React from "react";

function AllButton({ buttonNames, onButtonClick }) {
  return (
    <div className="flex flex-wrap gap-4 my-3 justify-around">
      {buttonNames.map((btn) => {
        return (
          <button
            key={btn}
            type="button"
            onClick={() => onButtonClick(btn)}
            className="size-14 text-xl text-indigo-600 rounded font-medium bg-gray-300 hover:bg-gray-400 cursor-pointer"
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default AllButton;
