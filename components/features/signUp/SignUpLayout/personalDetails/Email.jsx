import React from 'react'

function Email({ value, onChange }) {
  return (
    <div className="my-2 w-full">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autoComplete="email"
        value={value}
        onChange={onChange}
        required
        className="w-full focus:ring-2 text-white border rounded-xl px-3 py-2.5 focus:outline-none"
      />
    </div>
  )
}

export default Email;
