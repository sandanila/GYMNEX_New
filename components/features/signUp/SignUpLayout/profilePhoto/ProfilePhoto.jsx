"use client";

import React, { useEffect } from 'react'
import ProfilePhotoUpload from './ProfilePhotoUpload'
import ProfilePhotoPreview from './ProfilePhotoPreview'

function ProfilePhoto({ photo, setPhoto }) {

    const handleRemove = () => {
        setPhoto(null);
    };

    {/* image URL */}
    useEffect(() => {
      return () => {
        if (photo?.previewUrl) {
          URL.revokeObjectURL(photo.previewUrl);
        }
      };
    }, [photo]);
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
