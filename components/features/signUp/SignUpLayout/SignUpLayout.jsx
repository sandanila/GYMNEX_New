"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [termAccepted, setTermAccepted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] =useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  {/* phone number validation */}
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

  {/* birth day validate*/}
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

  {/* validate gender*/}
  const validateGender = () => {
    if (!gender) {
      alert("Please select your gender");
      return false;
    }

    return true;
  }

  {/* document type validate */}
  const validateDocumentType = () => {
    return true;
  }

  {/* validation document number */}
  const validateDocumentNumber = () => {
    const number = documentNumber.trim();

    {/* both fields are optional */}
    if (!documentType && !number) {
      return true;
    }

    {/* if document type is selected, number is required */}
    if (documentType && !number) {
      alert("Please enter your document number");
      return false;
    }

    {/* if number entered, document type is required */}
    if (!documentType && number) {
      alert("Please select your document type");
      return false;
    }

    {/* nic validation */}
    if (documentType === "nic") {
      const nicPattern = /^([0-9]{9}[vVxX]|[0-9]{12})$/;

      if (!nicPattern.test(number)) {
        alert("Please enter a valid NIC number");
        return false;
      }
    }

    {/* passport validation */}
    if (documentType === "passport") {
      if (number.length < 5 || number.length > 20) {
        alert("Please enter a valid Passport number");
        return false;
      }
    }

    return true;
  };

  {/* validate terms*/}
  const validateTerms = () => {
    if (!termAccepted) {
      alert("Please accept Terms & Conditions");
      return false;
    }

    return true;
  }

  {/* name validate */}
  const validateName = () => {
    if (!firstName.trim()) {
      alert("First Name is required");
      return false;
    }

    if (!lastName.trim()) {
      alert("Last Name is required");
      return false;
    }

    return true;
  }

  {/* validate email */}
  const validateEmail = () => {
    const emailValue = email.trim();

    if (!emailValue) {
      alert("Email is required");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address");
      return false;
    }

    return true;
  }

  {/* validate password */}
  const validatePassword = () => {
    if (!password) {
      alert("Password is required");
      return false;
    }

    if (password.length < 8) {
      alert("Password must contain at least 8 characters");
      return false;
    }

    if (!confirmPassword) {
      alert("Please confirm your password");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  }

  {/* form submit */}
  const handleSubmit = async (e) => {
    e.preventDefault();

    {/* name validate */}
    if (!validateName()) {
      return;
    }

    {/* email validate */}
    if (!validateEmail()) {
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

    {/* gender validation */}
    if (!validateGender()) {
      return;
    }

    {/* document type validation */}
    if (!validateDocumentType()) {
      return;
    }

    {/* document number validate */}
    if (!validateDocumentNumber()) {
      return;
    }

    {/* password validate */}
    if (!validatePassword()) {
      return;
    }

    {/* terms validate */}
    if (!validateTerms ()) {
      return;
    }

    {/* collect all from data */}
    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("gender", gender);
    formData.append("documentType", documentType);
    formData.append("documentNumber", documentNumber);
    formData.append("password", password);

    if (photo?.file) {
      formData.append("photo", photo.file);
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Registration failed");
        return;
      }

      setSuccess(result.message);

      setTimeout(() => {
        router.push("/signin");
      }, 2000);

    } catch (error) {
      console.error("Registration Error:", error);
      setError("Unable to connect to the server. Please try again.");

    } finally {
      setLoading(false);
    }
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
            {error && (
              <p className="mb-4 text-center text-sm text-red-500">
                {error}
              </p>
            )}

            {success && (
              <p className="mb-4 text-center text-sm text-green-500">
                {success}
              </p>
            )}

            <ProfilePhoto
              photo={photo}
              setPhoto={setPhoto}
            />
          </div>

          <Name
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
          />
          <Email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

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
              <DocumentType
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
              />
            </div>

            <div className="flex-1 min-w-0">
              <DocumentNumber
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </div>
          </div>

          <Security
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />

          <TermsAndConsitions
            checked={termAccepted}
            onChange={(e) => setTermAccepted(e.target.checked)}
          />
          <CreateButton loading={loading} />
          <SignInLink />
        </form>
      </div>
    </div>
  );
}

export default SignUpLayout;
