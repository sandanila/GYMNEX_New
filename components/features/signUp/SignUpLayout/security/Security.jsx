import React from 'react'
import Password from './password/Password'
import ConfirmPassword from './password/ConfirmPassword'

function Security({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <div>
      <Password
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <ConfirmPassword
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  )
}

export default Security;
