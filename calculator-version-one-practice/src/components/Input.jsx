import React from "react";

function Input({ inputVal }) {
  return (
    <div>
      <input
        value={inputVal}
        className="bg-gray-100 p-2 rounded w-full mt-4 text-5xl outline-0"
        type="text"
        readOnly
      />
    </div>
  );
}

export default Input;
