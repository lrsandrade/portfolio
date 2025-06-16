"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-4" aria-label="Close menu">
            <X size={24} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-xl">
            <Link href="/" onClick={() => setIsOpen(false)}>
              projetos
            </Link>
            <Link href="/sobre" onClick={() => setIsOpen(false)}>
              sobre
            </Link>
            <Link href="/contato" onClick={() => setIsOpen(false)}>
              contato
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
