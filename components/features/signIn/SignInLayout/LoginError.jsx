import React from 'react'

function LoginError({ message }) {
    if (!message) return null;
    
  return (
    <div
      role="alert"
      className="my-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
    >
      {message}
    </div>
  )
}

export default LoginError;
