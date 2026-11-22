import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Password({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        value={value}
        onChange={onChange}
        className="w-full focus:ring-2 text-white rounded-xl border px-3 py-2.5 pr-12"
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

export default Password;
