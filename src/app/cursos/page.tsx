'use client'
import React, { useState } from 'react'
import { Search, Filter, Star, BookOpen, Clock, User, ChevronDown, Heart } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Fundamentos de HTML e CSS',
    description: 'Aprenda os conceitos básicos de HTML e CSS para criar páginas web.',
    image: 'https://placeholder.co/300x200',
    category: 'Web Development',
    level: 'Iniciante',
    duration: '4 semanas',
    instructor: 'Maria Silva',
    rating: 4.8,
    modules: [
      'Introdução ao HTML',
      'Estrutura e Semântica HTML',
      'Fundamentos de CSS',
      'Layout e Responsividade'
    ]
  },
  {
    id: 2,
    title: 'JavaScript Avançado',
    description: 'Domine conceitos avançados de JavaScript e torne-se um desenvolvedor front-end expert.',
    image: 'https://placeholder.co/300x200',
    category: 'Programming',
    level: 'Avançado',
    duration: '8 semanas',
    instructor: 'João Pereira',
    rating: 4.9,
    modules: [
      'ES6+ Features',
      'Programação Assíncrona',
      'Design Patterns',
      'Performance e Otimização'
    ]
  },
  {
    id: 3,
    title: 'React para Iniciantes',
    description: 'Aprenda a construir aplicações web modernas com React.',
    image: 'https://placeholder.co/300x200',
    category: 'Web Development',
    level: 'Intermediário',
    duration: '6 semanas',
    instructor: 'Ana Rodrigues',
    rating: 4.7,
    modules: [
      'Introdução ao React',
      'Componentes e Props',
      'Estado e Ciclo de Vida',
      'Hooks e Context API'
    ]
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    description: 'Aprenda os princípios fundamentais de design de interface e experiência do usuário.',
    image: 'https://placeholder.co/300x200',
    category: 'Design',
    level: 'Iniciante',
    duration: '5 semanas',
    instructor: 'Carlos Mendes',
    rating: 4.6,
    modules: [
      'Fundamentos de Design',
      'Psicologia das Cores',
      'Prototipagem',
      'Testes de Usabilidade'
    ]
  }
]

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [filter, setFilter] = useState({ category: 'All', level: 'All' })
  const [sortBy, setSortBy] = useState('popularity')

  const filteredCourses = courses.filter(course => 
    (filter.category === 'All' || course.category === filter.category) &&
    (filter.level === 'All' || course.level === filter.level)
  ).sort((a, b) => {
    if (sortBy === 'popularity') return b.rating - a.rating
    if (sortBy === 'name') return a.title.localeCompare(b.title)
    return 0
  })

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilter(prev => ({ ...prev, [name]: value }))
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Nossos Cursos</h1>
        
        {/* Filtros e Ordenação */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="relative">
              <select
                name="category"
                onChange={handleFilterChange}
                className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="All">Todas Categorias</option>
                <option value="Web Development">Desenvolvimento Web</option>
                <option value="Programming">Programação</option>
                <option value="Design">Design</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            <div className="relative">
              <select
                name="level"
                onChange={handleFilterChange}
                className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              >
                <option value="All">Todos Níveis</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="relative">
            <select
              onChange={handleSortChange}
              className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 pl-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="popularity">Ordenar por Popularidade</option>
              <option value="name">Ordenar por Nome</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Lista de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{course.category}</span>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCourseClick(course)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Detalhes do Curso */}
        {selectedCourse && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={() => setSelectedCourse(null)}>
            <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
              <div className="mt-3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{selectedCourse.title}</h3>
                <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{selectedCourse.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-blue-500 mr-2" />
                    <span>{selectedCourse.instructor}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <span>{selectedCourse.rating}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Módulos do Curso:</h4>
                <ul className="list-disc list-inside mb-6">
                  {selectedCourse.modules.map((module, index) => (
                    <li key={index} className="text-gray-700">{module}</li>
                  ))}
                </ul>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Inscreva-se
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Adicionar aos Favoritos
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}