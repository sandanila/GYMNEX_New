import React from 'react'

function DateOfBirth({ value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        value={value}
        onChange={onChange}
        max={new Date().toISOString().split("T")[0]}
        className="w-full focus:ring-2 text-white border rounded-xl px-3 py-2.5"
      />
    </div>
  )
}

export default DateOfBirth;
