"use client"

import { useState } from "react"
import Image from "next/image"
import ImageModal from "./image-modal"
import type { ProjectImage } from "@/types"

interface ImageGridProps {
  images: ProjectImage[]
  limit?: number
}

export default function ImageGrid({ images, limit }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (image: ProjectImage) => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const goToNextImage = () => {
    if (!selectedImage) return
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
  }

  const goToPrevImage = () => {
    if (!selectedImage) return
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
  }

  // Limit the number of images if specified
  const displayImages = limit ? images.slice(0, limit) : images

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {displayImages.map((image) => (
          <div
            key={image.id}
            className="bg-[#dcd5c3] p-0 cursor-pointer transition-all hover:opacity-90"
            onClick={() => openModal(image)}
          >
            <div className="relative w-full" style={{ height: "300px" }}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
          totalImages={images.length}
          currentIndex={images.findIndex((img) => img.id === selectedImage.id)}
        />
      )}
    </>
  )
}
