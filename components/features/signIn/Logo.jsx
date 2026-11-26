import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
            src="/logo.png"
            alt="GYMNEX Logo"
            width={150}
            height={150}
            priority
            className="m-2 w-auto h-auto hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
        />
      </div>
    </>
  )
}

export default Logo
