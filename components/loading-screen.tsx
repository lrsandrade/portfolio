"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 300) // Small delay for fade out animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-[#f9f9f9] z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="relative w-48 h-48">
        <Image
          src="/images/auto/gif-laryssa.gif"
          alt="Loading"
          fill
          sizes="192px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  )
}
