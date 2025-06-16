"use client"

import type React from "react"

import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"

interface SiteWrapperProps {
  children: React.ReactNode
}

export default function SiteWrapper({ children }: SiteWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("hasVisited")

    if (hasVisited) {
      // Skip loading screen if already visited in this session
      setIsLoading(false)
      setShowContent(true)
    } else {
      // Show loading screen for first visit
      sessionStorage.setItem("hasVisited", "true")
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setShowContent(true)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-300 ${showContent ? "opacity-100" : "opacity-0"}`}>{children}</div>
    </>
  )
}