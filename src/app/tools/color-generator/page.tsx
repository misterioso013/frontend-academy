import Link from 'next/link'
import { ArrowLeft, Palette } from 'lucide-react'
import {ColorPaletteGenerator} from '@/components/color-palette-generator'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gerador de Paleta de Cores - Front-end Academy',
  description: 'Crie paletas de cores personalizadas para seu projeto de design ou desenvolvimento web.',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/tools" passHref className="mb-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar
        </Link>
        <header className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <Palette className="h-8 w-8 mr-2 text-blue-500" />
          Gerador de Paleta de Cores
        </header>
        <ColorPaletteGenerator />
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Como usar esta paleta</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Clique em "Gerar Nova Paleta" para criar uma nova combinação de cores.</li>
            <li>Use os controles deslizantes para ajustar a matiz, saturação e brilho da paleta.</li>
            <li>Clique em qualquer cor para copiá-la para a área de transferência.</li>
            <li>Use as cores em seu projeto de design ou desenvolvimento web.</li>
            <li>Experimente diferentes combinações até encontrar a paleta perfeita para o seu projeto.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
