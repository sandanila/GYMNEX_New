"use client";

import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

function PhoneNumber({ value, onChange }) {
  return (
    <div className="my-6 w-full">
      <PhoneInput
        international
        defaultCountry="LK"
        value={value}
        onChange={onChange}
        placeholder="Enter phone number"
        required
        className="phone-input w-full rounded-xl border border-gray-500 px-3 py-3 text-white focus-within:ring-blue-500"
      />
    </div>
  )
}

export default PhoneNumber;
