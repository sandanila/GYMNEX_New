import React from "react";

function LastName({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={value}
        onChange={onChange}
        className="w-full focus:ring-2 text-white rounded-xl border px-3 py-2.5"
      />
    </div>
  );
}

export default LastName;
