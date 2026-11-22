"use client";

import React, { useState } from 'react'
import ProfilePhotoUpload from './ProfilePhotoUpload'
import ProfilePhotoPreview from './ProfilePhotoPreview'

function ProfilePhoto() {

    const [photo, setPhoto] = useState(null);

    const handleRemove = () => {
        setPhoto(null);
    };
  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <ProfilePhotoPreview photo={photo} />
        
        <div className="flex gap-3">
            <ProfilePhotoUpload setPhoto={setPhoto} />

            {photo && (
                <button
                    type="button"
                    onClick={handleRemove}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                >
                    Remove Photo
                </button>
            )
            }
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
