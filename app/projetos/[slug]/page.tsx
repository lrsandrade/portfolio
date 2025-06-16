import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ImageGrid from "@/components/image-grid"
import { projects } from "@/data/projects"

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  /* ─────────────── links por projeto ─────────────── */
  const projectLinks: Record<string, string> = {
    sobrenome:   "https://laryssandrade.substack.com/p/sobrenome-a-casa-e-o-projeto",
    alinhavos:   "https://instagram.com/projetoalinhavos",
    anturio:     "https://www.behance.net/gallery/216671681/anturio",
    olugarquesomos: "https://econtents.bc.unicamp.br/inpec/index.php/proa/article/view/18842",
  }

  /* 404 */
  if (!project) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header currentPage="projetos" />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4 py-16">
            <h1 className="text-3xl font-medium mb-4">projeto não encontrado.</h1>
            <p className="mb-8">o projeto que você está procurando não existe.</p>
            <Link
              href="/"
              className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              voltar para a página inicial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  /* página do projeto */
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage="projetos" />

      <main className="flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-normal mb-2">
            {project.title}
          </h1>

          {/* descrição + link dinâmico */}
          {project.description && (
            <>
              <div className="max-w-3xl mx-auto mb-4">
                <p className="text-base md:text-lg text-center leading-relaxed">
                  {project.description}
                </p>
              </div>

              {projectLinks[project.slug] && (
                <div className="text-center mb-12">
                  <a
                    href={projectLinks[project.slug]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black-600 hover:underline"
                  >
                    conheça o projeto 
                  </a>
                </div>
              )}
            </>
          )}

          <ImageGrid images={project.images} limit={3} />

          {/* voltar */}
          <div className="mt-12 mb-4">
            <Link href="/" className="text-sm hover:underline inline-block">
              ← voltar
            </Link>
          </div>

          {/* texto institucional */}
          {["sobrenome", "alinhavos"].includes(project.slug) && (
            <div className="max-w-3xl mx-auto text-center mb-4">
              <p className="text-sm text-black-600 leading-relaxed">
                O projeto é realizado com recursos da Política Nacional Aldir
                Blanc (PNAB), do Governo Federal, através do Ministério da
                Cultura, operacionalizado pelo Governo de Alagoas, por meio da
                Secretaria de Estado da Cultura e Economia Criativa.
              </p>
            </div>
          )}

          {/* logos */}
          {["sobrenome", "alinhavos"].includes(project.slug) && (
            <div className="flex justify-center mt-8">
              <img
                src={`/images/sobrenome/pnab.png`}
                alt="logos dos financiadores"
                className="w-full max-w-[600px]"
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}