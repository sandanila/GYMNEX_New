import React from 'react'

function ProfilePhotoChange({ onChange }) {
  return (
    <div>
      <div>
        <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Change Photo

          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  )
}

export default ProfilePhotoChange;
