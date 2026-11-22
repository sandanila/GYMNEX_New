"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import Welcome from "../Welcome";
import Email from "../Email/Email";
import EmailInput from "../Email/EmailInput";
import Password from "../Password/Password";
import PasswordInput from "../Password/PasswordInput";
import ForgetPassword from "../Password/ForgetPassword";
import SignInButton from "../SignInButton";
import SignUpLink from "../SignUpLink";
import RememberMe from "./RememberMe";
import LoginError from "./LoginError";

function SignInLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    if (!email.trim()) {
      setErrorMessage("Email address is required");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setErrorMessage("Password is required");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");

    const isEmailValid = validateEmail();

    if (!isEmailValid) {
      return;
    }

    const isPasswordValid = validatePassword();

    if (!isPasswordValid) return;

    console.log("Email validation successful");
  };

  return (
    <div className="relative z-10 flex h-full w-full justify-end items-start">
      <div className="w-full md:w-1/2 text-white p-2 sm:p-4 md:p-8 md:m-6">
        <div className="rounded-2xl shadow-2xl shadow-purple-500 backdrop-blur-xs m-2 sm:m-4 md:m-8 border-2 p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <Logo />

            <Welcome />

            <Email />

            <EmailInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <Password />
              <ForgetPassword />
            </div>

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <RememberMe />
            <LoginError message={errorMessage} />

            <SignInButton isLoading={isLoading} />

            <SignUpLink />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInLayout;
