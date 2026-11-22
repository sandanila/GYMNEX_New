import React from 'react'

function EmailInput({ value, onChange }) {
  return (
    <>
      <div className="py-2 pb-4">
        <input
          type="email"
          id="email"
          name="email"
          value={value}
          onChange={onChange}
          placeholder="Enter your Email"
          className="p-2.5 w-full border rounded-xl bg-gray-900"
        />
      </div>
    </>
  )
}

export default EmailInput
