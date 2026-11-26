function ProfilePhotoUpload({ setPhoto }) {
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    {
      /* image formates */
    }
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select JPG, PNG or WEBP image");
      e.target.value = "";
      return;
    }

    {
      /* maximum size */
    }
    const maxSize = 2 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Image size must be less than 2 MB");
      e.target.value = "";
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setPhoto({
      file: file,
      previewUrl: previewUrl,
    });

    e.target.value = "";
  };

  return (
    <label className="cursor-pointer rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
      Upload Photo
      <input
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handlePhotoChange}
        className="hidden"
      />
    </label>
  );
}

export default ProfilePhotoUpload;
