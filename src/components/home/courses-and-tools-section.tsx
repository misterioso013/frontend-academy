'use client'
import { useState } from 'react'
import { Book, Code, Layers, Palette, Box, Zap, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function CoursesAndToolsSection() {
  const [activeTab, setActiveTab] = useState('courses')

  const courses = [
    { icon: <Book className="h-6 w-6" />, title: "HTML Fundamentals", level: "Iniciante", duration: "4 semanas", rating: 4.8, link: "/cursos" },
    { icon: <Palette className="h-6 w-6" />, title: "CSS Mastery", level: "Intermediário", duration: "6 semanas", rating: 4.9, link: "/cursos" },
    { icon: <Code className="h-6 w-6" />, title: "JavaScript Avançado", level: "Avançado", duration: "8 semanas", rating: 4.7, link: "/cursos" },
    { icon: <Layers className="h-6 w-6" />, title: "React Profissional", level: "Avançado", duration: "10 semanas", rating: 4.9, link: "/cursos"  },
  ]

  const tools = [
    { icon: <Box className="h-6 w-6" />, title: "Gerador de Layout", description: "Crie layouts responsivos com poucos cliques", link: "#" },
    { icon: <Code className="h-6 w-6" />, title: "Gerador de Componentes React", description: "Gere componentes React automaticamente", link: "#" },
    { icon: <Zap className="h-6 w-6" />, title: "Otimizador de CSS", description: "Otimize e limpe seu CSS automaticamente", link: "#" },
    { icon: <Palette className="h-6 w-6" />, title: "Gerador de Paleta de Cores", description: "Crie paletas de cores harmoniosas para seus projetos", link: "/tools/color-generator" },
    { icon: <Book className="h-6 w-6" />, title: "IDE Online", description: "Crie e edite arquivos HTML, CSS e JavaScript online", link: "/editor/web" },
    { icon: <Book className="h-6 w-6" />, title: "React Playground", description: "Teste e experimente React sem configuração", link: "/editor/react" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Cursos e Ferramentas
        </h2>
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'courses'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
              onClick={() => setActiveTab('courses')}
            >
              Cursos
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'tools'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
              onClick={() => setActiveTab('tools')}
            >
              Ferramentas
            </button>
          </div>
        </div>

        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-600 rounded-full">{course.icon}</div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 font-bold">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">Nível: {course.level}</p>
                  <p className="text-gray-400 mb-4">Duração: {course.duration}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                    Ver Detalhes
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-purple-600 rounded-full mr-4">{tool.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6">{tool.description}</p>
                  <Link href={tool.link}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                      Experimentar Agora
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}