import React from "react";

function CalculatorContainer(props) {
  return (
    <div className="w-[400px] h-auto p-10 rounded-xl shadow bg-indigo-300">
      {props.children}
    </div>
  );
}

export default CalculatorContainer;
