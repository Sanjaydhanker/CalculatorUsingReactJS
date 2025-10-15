import React from "react";

function InputTag({ type, inputValue }) {
  return (
    <div>
      {" "}
      <input
        className="bg-gray-200 w-full rounded  p-3 text-4xl outline-0"
        type={type}
        value={inputValue}
        readOnly
      />
    </div>
  );
}

export default InputTag;
