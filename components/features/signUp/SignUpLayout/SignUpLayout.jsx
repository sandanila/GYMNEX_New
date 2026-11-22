"use client";

import React, { useState } from "react";
import ProfilePhoto from "./profilePhoto/ProfilePhoto";
import Name from "./personalDetails/name/Name";
import Email from "./personalDetails/Email";
import PhoneNumber from "./personalDetails/PhoneNumber";
import DateOfBirth from "./personalDetails/DateOfBirth";
import Gender from "./personalDetails/Gender";
import DocumentType from "./personalDetails/DocumentType";
import DocumentNumber from "./personalDetails/DocumentNumber";
import Security from "./security/Security";
import CreateButton from "./createButton/CreateButton";
import SignInLink from "./SignInLink";
import TermsAndConsitions from "./TermsAndConsitions";
import { isValidPhoneNumber } from "react-phone-number-input";

function SignUpLayout() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  {
    /* phone number validation */
  }
  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      alert("Phone number is required");
      return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  {
    /* birth day validate*/
  }
  const validateDateOfBirth = () => {
    if (!dateOfBirth) {
      alert("Date of Birth is required");
      return false;
    }

    const selectedDate = new Date(dateOfBirth);

    if (Number.isNaN(selectedDate.getTime())) {
      alert("Please enter a valid Date of Birth");
      return false;
    }

    return true;
  };

  {/* form submit */}
  const handleSubmit = (e) => {
    e.preventDefault();

    {/* password validation */}
    if (!password || !confirmPassword) {
      alert("Please enter both passwords");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    {/* phone number validation*/}
    if (!validatePhoneNumber()) {
      return;
    }

    {/* birthday validation */}
    if (!validateDateOfBirth()) {
      return;
    }
    
    console.log("All validations successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-6">
      <div className="w-full max-w-md rounded-2xl bg-black p-5 sm:p-8 shadow-xl">
        <h1 className="text-white text-2xl font-bold text-center">
          Create New Account
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Join GYMNEX and manage your gym membership
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <ProfilePhoto />
          </div>

          <Name />
          <Email />

          <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />

          <div className="flex flex-col sm:flex-row my-6 gap-3">
            <DateOfBirth
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

            <Gender
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="flex gap-3 my-6 items-center">
            <div className="w-1/4">
              <DocumentType />
            </div>

            <div className="flex-1 min-w-0">
              <DocumentNumber />
            </div>
          </div>

          <Security
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />

          <TermsAndConsitions />
          <CreateButton />
          <SignInLink />
        </form>
      </div>
    </div>
  );
}

export default SignUpLayout;
