export interface ProjectImage {
  id: string
  src: string
  alt: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  thumbnail: string
  alt: string
  images: ProjectImage[]
}
