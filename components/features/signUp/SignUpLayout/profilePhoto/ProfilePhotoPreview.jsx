import Image from 'next/image'
function ProfilePhotoPreview({ photo }) {
  return (
    <div>
      <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {photo ? (
            <Image
                src={photo}
                alt="Profile Preview"
                width={112}
                height={112}
                className="w-full h-full object-cover"
            />
        ) : (
            <span className="text-gray-500 text-sm">
                No Photo
            </span>
        )
        }
      </div>
    </div>
  )
}

export default ProfilePhotoPreview
