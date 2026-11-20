import React from "react";

function PasswordInput() {
  return (
    <>
      <div className="py-2 pb-4">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="p-2.5 w-full border rounded-xl bg-gray-900"
        />
      </div>
    </>
  );
}

export default PasswordInput;
