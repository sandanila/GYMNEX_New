import React from "react";

function DocumentType() {
  return (
    <div className="w-full">
      <select
        id="documentType"
        name="documentType"
        defaultValue=""
        className="w-full text-white bg-black border  rounded-xl px-3 py-2.5 text-sm shadow-xs focus:ring-2 focus:border-blue-500"
      >
        <option value="" disabled>
          Type
        </option>
        <option value="nic">NIC</option>
        <option value="passport">Passport</option>
      </select>
    </div>
  );
}

export default DocumentType;
