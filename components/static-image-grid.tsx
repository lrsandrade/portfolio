import Image from "next/image"
import type { ProjectImage } from "@/types"

interface StaticImageGridProps {
  images: ProjectImage[]
  limit?: number
}

export default function StaticImageGrid({ images, limit }: StaticImageGridProps) {
  // Limit the number of images if specified
  const displayImages = limit ? images.slice(0, limit) : images

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
      {displayImages.map((image) => (
        <div key={image.id} className="bg-[#f8f7e9] p-2">
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
  )
}