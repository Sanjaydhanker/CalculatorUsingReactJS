import React from "react";

function InputTag({ type }) {
  return (
    <div>
      {" "}
      <input
        className="bg-gray-200 w-full rounded h-20 text-2xl outline-0"
        type={type}
        readOnly
      />
    </div>
  );
}

export default InputTag;
