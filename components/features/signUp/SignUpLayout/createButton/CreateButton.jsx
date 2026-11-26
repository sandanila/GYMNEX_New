"use client";
function CreateButton({ loading }) {
  return (
    <div>
      <div className="py-2 pb-4">
        <button
          type="submit"
          id="create"
          name="create"
          disabled={loading}
          className="hover:bg-purple-700 rounded-xl bg-purple-600 p-2.5 w-full font-medium"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </div>
  );
}

export default CreateButton;
