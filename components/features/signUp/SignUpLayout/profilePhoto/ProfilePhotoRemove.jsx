import React from 'react'

function ProfilePhotoRemove({ onRemove }) {
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Remove Photo
        </button>
      </div>
    </div>
  )
}

export default ProfilePhotoRemove;
