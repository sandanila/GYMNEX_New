import React from 'react'
import Image from 'next/image'

function BackgroundImage() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
            src="/image.jpeg"
            alt="bgImage"
            priority
            fill
            sizes="100vw"
            className="object-left object-cover"
        />
      </div>
    </>
  )
}

export default BackgroundImage
