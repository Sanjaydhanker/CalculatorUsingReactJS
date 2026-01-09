import React from "react";

function Container(props) {
  return (
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center  ">
      <div className="max-w-sm border shadow bg-indigo-400 p-8 rounded ">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
