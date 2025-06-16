"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react"
import type { ProjectImage } from "@/types"

interface ImageModalProps {
  image: ProjectImage
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  totalImages: number
  currentIndex: number
}

export default function ImageModal({ image, onClose, onNext, onPrev, totalImages, currentIndex }: ImageModalProps) {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    },
    [onClose, onNext, onPrev],
  )

  // Add and remove event listeners
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto" // Restore scrolling when modal is closed
    }
  }, [handleKeyDown])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => {
            // This would typically download the image in a real implementation
            alert("Função de download seria implementada aqui")
          }}
          className="bg-gray-800 bg-opacity-70 text-white p-2 rounded-md hover:bg-opacity-100 transition-all"
          aria-label="Salvar imagem"
        >
          <Download size={20} />
          <span className="ml-2">Salvar</span>
        </button>
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
        aria-label="Fechar"
      >
        <X size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="relative max-w-4xl max-h-[80vh] mx-auto">
        <div className="relative" style={{ width: "80vw", height: "80vh", maxWidth: "1200px", maxHeight: "800px" }}>
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            sizes="80vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
