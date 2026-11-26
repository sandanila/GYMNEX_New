import React from "react";

function DocumentNumber({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        name="documentNumber"
        id="documentNumber"
        placeholder="Document Number"
        value={value}
        onChange={onChange}
        className="focus:ring-2 focus:outline-none text-white px-3 py-2.5 w-full border rounded-xl"
      />
    </div>
  );
}

export default DocumentNumber;
