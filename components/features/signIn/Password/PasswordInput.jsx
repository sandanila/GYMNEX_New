"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordInput({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="py-2 pb-4 relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={value}
          onChange={onChange}
          placeholder="Enter your password"
          autoComplete="off"
          className="p-2.5 pr-16 w-full border rounded-xl bg-gray-900"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-8 -translate-y-1/2 text-sm text-gray-400"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
  );
}

export default PasswordInput;
