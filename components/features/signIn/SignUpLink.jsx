import React from 'react'
import Link from 'next/link'

function SignUpLink() {
  return (
    <>
      <div className="flex items-center justify-center">
        <p>Don't have an account?{" "}
            <Link href="/SignUp" className="hover:underline">
                Sign up
            </Link>
        </p>
      </div>
    </>
  )
}

export default SignUpLink
