import React from 'react'

function FirstName() {
  return (
    <div className="w-full">
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="w-full focus:ring-2 text-white rounded-xl border px-3 py-2.5"
      />
    </div>
  )
}

export default FirstName
