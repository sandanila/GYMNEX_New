
function ProfilePhotoUpload({ setPhoto }) {
  
  const handlePhotoChange = (e) => {
    const file = e.target.file[0];
    
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <div>
        <label className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
            Upload Photo

            <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
        />
        </label>
      </div>
    </div>
  )
}

export default ProfilePhotoUpload;
