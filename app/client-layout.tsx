"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 300) // Wait for fade out animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-[#dbd3c3] z-50 flex items-center justify-center transition-opacity duration-300 opacity-0 pointer-events-none">
        <Image
          src="/images/auto/gif-laryssa.gif"
          alt="carregando site laryssa andrade"
          width={120}
          height={120}
          className="w-24 h-24 md:w-32 md:h-32"
          priority
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-[#dbd3c3] z-50 flex items-center justify-center transition-opacity duration-300">
      <Image
        src="/images/auto/gif-laryssa.gif"
        alt="carregando site laryssa andrade"
        width={180}
        height={180}
        className="w-50 h-50 md:w-50 md:h-50"
        priority
      />
    </div>
  )
}