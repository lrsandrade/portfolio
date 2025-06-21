import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* topo */}
      <Header currentPage="sobre" />

      {/* conteúdo principal */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8 md:py-16">
          {/* duas colunas: imagem + gif  |  texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
            
            {/* COLUNA 1 — imagem de retrato + gif */}
            <div className="w-full flex flex-col items-center space-y-4">
              {/* Retrato */}
              <div className="relative w-full" style={{ height: "400px" }}>
                <Image
                  src="/images/auto/laryssa.jpg"
                  alt="Fotografia da artista. Mulher de pele clara, olhos verdes, rosto redondo, cabelos cacheados loiros-acizentados, usando uma camisa branca com um dos ombros à mostra. Está sentada, olhando levemente para o lado esquerdo da imagem com expressão serena. A luz natural entra pela lateral, iluminando suavemente seu rosto. O fundo é neutro, em tom bege claro."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              {/* GIF logo abaixo */}
              <div className="relative w-full" style={{ height: "150px" }}>
                <Image
                  src="/images/chair.gif"
                  alt="Gif. Três símbolos se alternam entre si. Uma cadeira, um pássaro e uma estrela disforme com nove pontas."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            {/* COLUNA 2 — texto */}
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-xl leading-relaxed">
                laryssa andrade (maceió-al, 1996).
              </p>

               <div className="mt-8 space-y-4"></div>
              <p className="text-lg md:text-xl leading-relaxed">
                artista visual e pesquisadora. trabalho com fotografia documental, design e colagem, criando narrativas sobre memória, arquivos pessoais e histórias coletivas.
              </p>

              <div className="mt-8 space-y-4">
                <p className="text-lg md:text-xl leading-relaxed">
                b. em serviço social, desenvolvo projetos que dialogam com identidade, território e afetos, utilizando suportes analógicos e digitais.
              </p>
              </div>

              {/* contatos */}
              <div className="mt-8 space-y-4">
                <h2 className="text-lg font-medium">em outros lugares</h2>
                <ul className="space-y-2">

                   <li>
                    <a
                      href="https://www.behance.net/lrsandrade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      behance
                    </a>
                    </li>

                     <li>
                    <a
                      href="https://www.instagram.com/atelierlaryssa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      atelier
                    </a>
                  </li>
              
                     <li><a
                      href="https://www.instagram.com/lrsandrade"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      instagram
                    </a>
                  </li>
                 
                  <li>
                    <a
                      href="http://lattes.cnpq.br/6761835429388868"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lattes
                    </a>
                  </li>

                  <li>
                  <a
                   href="mailto:hilaryssa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  e-mail
                  </a>
                 </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* rodapé */}
      <Footer />
    </div>
  )
}
