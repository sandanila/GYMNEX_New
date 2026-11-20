import React from "react";
import Logo from "./Logo";
import Welcome from "./Welcome";
import Email from "./Email/Email";
import EmailInput from "./Email/EmailInput";
import Password from "./Password/Password";
import PasswordInput from "./Password/PasswordInput";
import ForgetPassword from "./Password/ForgetPassword";
import SignInButton from "./SignInButton";
import SignUpLink from "./SignUpLink";

function SignInLayout() {
  return (
    <div className="relative z-10 flex h-full w-fu1 justify-end items-start">
      <div className="w-full md:w-1/2 text-white p-4 md:p-8 m-10">
        <div className="rounded-2xl shadow-2xl shadow-purple-500 backdrop-blur-xs m-4 md:m-8 border-2 p-8">
          <Logo />

          <Welcome />

          <Email />

          <EmailInput />

          <div className="flex items-center justify-between">
            <Password />
            <ForgetPassword />
          </div>

          <PasswordInput />

          <SignInButton />

          <SignUpLink />
        </div>
      </div>
    </div>
  );
}

export default SignInLayout;
