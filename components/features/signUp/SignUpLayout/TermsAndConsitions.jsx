import React from "react";

function TermsAndConsitions() {
  return (
    <div className="flex items-start gap-2 my-4">
      <input
        type="checkbox"
        id="terms"
        name="terms"
        required
        className="mt-1 accent-purple-600"
      />

      <label htmlFor="terms" className="text-sm text-gray-400">
        I agree to the{" "}
        <a href="#" className="text-purple-500 hover:underline">
            Terms & Conditions
        </a>
        {" "}and{" "}
        <a href="#" className="text-purple-500 hover:underline">
            privacy Policy
        </a>
      </label>
    </div>
  );
}

export default TermsAndConsitions;
