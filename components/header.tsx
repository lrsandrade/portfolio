import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header({ currentPage }: { currentPage?: string }) {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-8 h-8">
          <Image src="/images/logo.png" alt="Laryssa Andrade logo" fill sizes="40px" style={{ objectFit: "contain" }} />
        </div>
        <h1 className="text-xl font-normal">laryssa andrade</h1>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className={`text-sm hover:underline ${currentPage === "projetos" ? "font-medium" : ""}`}>
          projetos
        </Link>
        <Link href="/sobre" className={`text-sm hover:underline ${currentPage === "sobre" ? "font-medium" : ""}`}>
          sobre
        </Link>
        <Link href="https://laryssandrade.substack.com/" className={`text-sm hover:underline ${currentPage === "sobre" ? "font-medium" : ""}`}>
          textos
        </Link>
        <button aria-label="Search" className="ml-2">
          <Search size={20} />
        </button>
      </nav>
      <div className="md:hidden flex items-center">
        <button aria-label="Search" className="mr-2">
          <Search size={20} />
        </button>
        <MobileMenu />
      </div>
    </header>
  )
}
