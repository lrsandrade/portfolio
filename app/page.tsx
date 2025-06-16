import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <Header currentPage="projetos" />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projetos/${project.slug}/`}
                alt={project.alt}
                className="block bg-[#f8f7e9] hover:opacity-90 transition-opacity"
              >
                <div className="relative w-full" style={{ height: "500px" }}>
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={project.id === "1"}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
