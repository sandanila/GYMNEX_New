"use client";
import React from "react";
import { LoaderCircle } from "lucide-react";

function SignInButton({ isLoading = false }) {
  return (
    <>
      <div className="py-2 pb-4">
        <button
          type="submit"
          id="signIn"
          name="signIn"
          disabled={isLoading}
          className="hover:bg-purple-700 rounded-xl bg-purple-600 p-2.5 w-full font-medium"
        >
          {isLoading ? (
            <>
            <LoaderCircle size={20} className="animate-spin" />
            Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </div>
    </>
  );
}

export default SignInButton;
