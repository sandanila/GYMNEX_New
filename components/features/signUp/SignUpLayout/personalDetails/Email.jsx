import React from 'react'

function Email() {
  return (
    <div className="my-2 w-full">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        autoComplete="email"
        required
        className="w-full focus:ring-2 text-white border rounded-xl px-3 py-2.5 focus:outline-none"
      />
    </div>
  )
}

export default Email;
