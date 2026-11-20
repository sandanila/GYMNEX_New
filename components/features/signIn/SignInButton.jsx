import React from "react";

function SignInButton() {
  return (
    <>
      <div className="py-2 pb-4">
        <button
          type="submit"
          id="signIn"
          name="signIn"
          className="hover:bg-purple-700 rounded-xl bg-purple-600 p-2.5 w-full font-medium"
        >
          Sign In
        </button>
      </div>
    </>
  );
}

export default SignInButton;
