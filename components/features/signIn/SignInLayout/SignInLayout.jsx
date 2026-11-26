"use client";

import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const validateEmail = () => {
    const emailValue = email.trim();
    
    if (!emailValue) {
      setErrorMessage("Email address is required");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setErrorMessage("Password is required");
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sign in button clicked")

    setErrorMessage("");

    const isEmailValid = validateEmail();

    if (!isEmailValid) return;

    console.log("Email validation successful")

    const isPasswordValid = validatePassword();

    if (!isPasswordValid) return;

    // 1. start loading
    setIsLoading(true);

    try {
      // 2. send login data to backend
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      // 3. get backend response
      const data = await res.json();

      // 4. check login result
      if (!res.ok) {
        setErrorMessage(data.message);
        return;
      }

      console.log("Login successful");
      console.log("User role:", data.user.role);

      if (data.user.role === "admin") {
        router.push("/admin/dashboard");
      } else if (data.user.role === "member") {
        router.push("/member/dashboard");
      }

    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
