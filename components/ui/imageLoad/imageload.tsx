"use client"
import Image from "next/image"
import { useState } from "react"

type ImgProps = {
  imgUrl: string,
  imgAlt: string
}

export default function CustomImageLoad({ imgUrl, imgAlt }: ImgProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full bg-cover content-center">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-sky-700 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Image 
        src={imgUrl}
        width={100}
        height={100}
        alt={imgAlt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)} // avoid infinite loading
        className="w-full bg-cover h-full"
      />
    </div>
  )
}