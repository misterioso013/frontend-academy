"use client"
import React, { useState } from 'react'
import { Youtube, Instagram, GithubIcon } from 'lucide-react'
import Link from 'next/link'
export function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle newsletter subscription
      console.log('Subscribed:', email)
      setEmail('')
    }
    return(
        <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Front-end Academy</h3>
              <p>Transformando desenvolvedores, um código de cada vez.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-blue-400 transition duration-300">Contato</Link></li>
                <li><Link href="https://forum.vemser.tech" target='_blank' className="hover:text-blue-400 transition duration-300">Fórum</Link></li>
                <li><Link href="/info" className="hover:text-blue-400 transition duration-300">Política de Privacidade</Link></li>
                <li><Link href="/info" className="hover:text-blue-400 transition duration-300">Termos de Uso</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <Link href="https://www.youtube.com/@rosielvictor" target='_blank' className="text-white hover:text-blue-400 transition duration-300">
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/misterioso013" target="_blank" className="text-white hover:text-blue-400 transition duration-300">
                  <GithubIcon className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com/rosielvictor" target="_blank" className="text-white hover:text-blue-400 transition duration-300">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                Assinar Newsletter
              </button>
            </form>
          </div>
        </div>
      </footer>
    )
}