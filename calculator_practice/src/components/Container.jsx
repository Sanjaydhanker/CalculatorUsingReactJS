import React from "react";

function Container({ children }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-300">
      <div className="w-sm p-8 bg-gray-200 rounded-2xl">{children}</div>
    </div>
  );
}

export default Container;
