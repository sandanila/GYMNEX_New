import React from 'react'

function RememberMe() {
  return (
    <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          className="h-4 w-4 accent-purple-600"
        />

        <label
          htmlFor="rememberMe"
          className="text-sm text-gray-400 cursor-pointer"
        >
            Remember me
        </label>
    </div>
  )
}

export default RememberMe
