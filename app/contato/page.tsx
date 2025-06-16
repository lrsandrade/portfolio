import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Instagram, Linkedin } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9f9]">
      <Header currentPage="contato" />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl mb-8">contato</h1>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-lg font-medium">informações</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} />
                    <a href="mailto:hilaryssa@gmail.com" className="hover:underline">
                      hilaryssa@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-medium">redes sociais</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Instagram size={20} />
                    <a
                      href="https://instagram.com/lrsandrade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @lrsandrade
                    </a>
                    <a
                      href="https://instagram.com/atelierlaryssa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      @atelierlaryssa
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin size={20} />
                    <a
                      href="https://www.linkedin.com/in/lrsandrade/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      laryssa andrade
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="text-lg font-medium mb-4">envie uma mensagem</h2>
                <form name="contact" method="POST" data-netlify="true" className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm">
                      seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm">
                      e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm">
                      mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded-sm"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                    enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
