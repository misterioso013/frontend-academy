'use client'
import React, { useState } from 'react'
import { Home, ChevronRight, Menu, X } from 'lucide-react'
import Link from 'next/link'

type HeaderProps = {
    link: {
        label: string
        href: string
        isActive: boolean
    }[]
}

export function Header({link}: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
        <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-2 text-sm">
                <li>
                    <Link href="/">
                        <Home className="w-4 h-4" />
                    </Link>
                </li>
                <li>
                    <ChevronRight className="w-4 h-4" />
                </li>
                {
                    link.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>
                            <Link href={item.href} className="block py-2">
                                {item.label}
                            </Link>
                        </li>
                        {index < link.length - 1 && (
                            <li>
                                <ChevronRight className="w-4 h-4" />
                            </li>
                        )}
                        </React.Fragment>
                    ))
                }
              </ul>
            </nav>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <nav className="mt-4 md:hidden">
              <ul className="space-y-2">
                <li>
                    <Link href="/" className="flex flex-row items-center py-2 gap-2">
                        <Home className="w-4 h-4" /> Início
                    </Link>
                </li>
                {link.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href} className="block py-2">
                            {item.label}
                        </Link>
                    </li>
                ))}
              </ul>
            </nav>
          )}
          <h1 className="text-3xl font-bold mt-4">Introdução ao HTML Básico</h1>
        </div>
      </header>
    )
}