import React from "react";

function AllButton({ buttons, handleClickButton }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {buttons.map((button) => {
        return (
          <button
            className="h-16 w-18 rounded font-semibold bg-gray-300 active:bg-gray-500 cursor-pointer"
            key={button}
            onClick={() => handleClickButton(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default AllButton;
