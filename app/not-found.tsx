import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <h1 className="text-3xl font-medium mb-4">página não encontrada</h1>
          <p className="mb-8">a página que você está procurando não existe.</p>
          <Link href="/" className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
            voltar para a página inicial
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
