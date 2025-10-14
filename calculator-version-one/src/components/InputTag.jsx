import React from "react";

function InputTag() {
  return (
    <div>
      {" "}
      <input
        className="bg-gray-200 w-full rounded text-6xl outline-0"
        type="text"
        readOnly
      />
    </div>
  );
}

export default InputTag;
