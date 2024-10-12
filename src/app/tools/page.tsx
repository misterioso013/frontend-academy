"use client"
import React, { useState } from 'react'
import { Code, Edit3, Book, Zap, Box, Layout, FileCode, Coffee, ExternalLink, X, Pipette } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Tool = {
    name: string
    icon: React.ReactNode
    description: string
    link: string
    }

type ToolCategory = {
    category: string
    items: Tool[]
}

const tools: ToolCategory[] = [
  {
    category: 'Geradores de Código',
    items: [
      { name: 'Gerador de HTML', icon: <FileCode className="h-8 w-8 text-orange-500" />, description: 'Crie estruturas HTML rapidamente', link: '#' },
      { name: 'Gerador de CSS', icon: <Layout className="h-8 w-8 text-blue-500" />, description: 'Gere estilos CSS com facilidade', link: '#' },
      { name: 'Gerador de JavaScript', icon: <Zap className="h-8 w-8 text-yellow-500" />, description: 'Crie snippets de JS automaticamente', link: '#' },
      { name: 'Gerador de Componentes React', icon: <Box className="h-8 w-8 text-cyan-500" />, description: 'Monte componentes React rapidamente', link: '#' },
      { name: 'Gerador de Paleta de Cores', icon: <Pipette className="h-8 w-8 text-purple-500" />, description: 'Crie paletas de cores personalizadas', link: '/tools/color-generator' },
    ]
  },
  {
    category: 'Editores Online',
    items: [
      { name: 'Editor de Código Interativo', icon: <Edit3 className="h-8 w-8 text-purple-500" />, description: 'Codifique e veja os resultados em tempo real', link: '/editor/web' },
      { name: 'Playground de React', icon: <Code className="h-8 w-8 text-blue-600" />, description: 'Experimente com React sem configuração', link: '/editor/react' },
    ]
  },
  {
    category: 'Recursos Adicionais',
    items: [
      { name: 'Documentações', icon: <Book className="h-8 w-8 text-green-500" />, description: 'Acesse documentações oficiais de tecnologias web', link: '#' },
      { name: 'Tutoriais em Vídeo', icon: <Coffee className="h-8 w-8 text-red-500" />, description: 'Aprenda com tutoriais em vídeo passo a passo', link: '#' },
    ]
  }
]

export default function ResourcesAndToolsPage() {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Recursos e Ferramentas</h1>
        
        {tools.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:shadow-lg"
                  onClick={() => handleToolClick(tool)}
                >
                  {tool.icon}
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{tool.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 text-center">{tool.description}</p>
                  <Button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                    Acessar
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal para exibir mais informações sobre a ferramenta */}
        {selectedTool && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{selectedTool.name}</h3>
                <Button onClick={() => setSelectedTool(null)} className="text-gray-500 hover:text-gray-700" variant="ghost">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex items-center justify-center mb-4">
                {selectedTool.icon}
              </div>
              <p className="text-gray-600 mb-6">{selectedTool.description}</p>
              <h4 className="font-semibold mb-2">Como usar:</h4>
              <ol className="list-decimal list-inside text-gray-700 mb-6">
                <li>Clique no botão &#34;Acessar&#34; para abrir a ferramenta</li>
                <li>Siga as instruções na interface da ferramenta</li>
                <li>Experimente diferentes opções e configurações</li>
                <li>Copie ou exporte o resultado conforme necessário</li>
              </ol>
              <div className="flex justify-between">
                <Link href={selectedTool.link}>
                    <Button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
                    Acessar Ferramenta
                    <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                </Link>
                <Button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300">
                  Ver Tutorial
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Seção de Recursos Adicionais */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recursos Complementares</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  MDN Web Docs - Referência completa para desenvolvimento web
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Can I Use - Verifique o suporte de recursos em navegadores
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  CSS-Tricks - Dicas e truques para CSS
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GitHub - Explore projetos open-source
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Plugins Recomendados</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Box className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <div>
                  <span className="font-medium">ESLint</span> - Ferramenta de linting para identificar e corrigir problemas no seu código JavaScript
                </div>
              </li>
              <li className="flex items-start">
                <Box className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <div>
                  <span className="font-medium">Prettier</span> - Formatador de código para manter seu código consistente e legível
                </div>
              </li>
              <li className="flex items-start">
                <Box className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <div>
                  <span className="font-medium">Live Server</span> - Servidor de desenvolvimento local com recarga automática para seus projetos web
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}