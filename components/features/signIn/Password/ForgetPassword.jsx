import React from "react";
import Link from "next/link";
function ForgetPassword() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Link href="#" className="hover:underline">
          Forgot Password
        </Link>
      </div>
    </>
  );
}

export default ForgetPassword;
