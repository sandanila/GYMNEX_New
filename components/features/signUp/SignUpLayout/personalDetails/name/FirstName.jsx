import React from 'react'

function FirstName({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={value}
        onChange={onChange}
        className="w-full focus:ring-2 text-white rounded-xl border px-3 py-2.5"
      />
    </div>
  )
}

export default FirstName
