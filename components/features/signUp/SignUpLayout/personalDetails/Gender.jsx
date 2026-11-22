import React from "react";

function Gender({ value, onChange }) {
  return (
    <div className="w-full">
        <select
          id="gender"
          name="gender"
          value={value}
          onChange={onChange}
          defaultValue=""
          className="text-white bg-black border  rounded-xl w-full px-3 py-3 text-sm shadow-xs focus:ring-2 focus:border-blue-500"
        >
          <option value="" disabled>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
    </div>
  );
}

export default Gender;
