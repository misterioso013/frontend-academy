'use client'
import React from 'react'
import { Book, Code, Zap, Bell, ChevronRight, BarChart, Award, Calendar } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export default function UserDashboard() {
  const learningTracks = [
    { name: 'HTML & CSS', progress: 75 },
    { name: 'JavaScript', progress: 50 },
    { name: 'React', progress: 25 },
  ]

  const recommendedCourses = [
    { name: 'Advanced CSS Layouts', icon: <Code className="h-6 w-6 text-blue-500" />, duration: '4 weeks' },
    { name: 'JavaScript ES6+', icon: <Zap className="h-6 w-6 text-yellow-500" />, duration: '6 weeks' },
    { name: 'React Hooks in Depth', icon: <Book className="h-6 w-6 text-green-500" />, duration: '3 weeks' },
  ]

  const notifications = [
    { title: 'New Quiz Available', message: 'Test your JavaScript skills!', time: '2 hours ago' },
    { title: 'Course Update', message: 'New content added to React Basics', time: '1 day ago' },
    { title: 'Achievement Unlocked', message: 'You\'ve completed 5 courses!', time: '3 days ago' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome back, João!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visão Geral do Progresso */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-blue-500" />
              Visão Geral do Progresso
            </h2>
            <div className="space-y-4">
              {learningTracks.map((track, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{track.name}</span>
                    <span className="text-sm font-medium text-gray-500">{track.progress}%</span>
                  </div>
                  <Progress value={track.progress} className="w-full" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Próxima Aula</h3>
              <div className="bg-blue-50 p-4 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium text-blue-700">JavaScript: Funções Avançadas</p>
                  <p className="text-sm text-blue-600">Duração: 45 minutos</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Continuar
                </button>
              </div>
            </div>
          </div>

          {/* Recomendações Personalizadas */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="mr-2 h-5 w-5 text-yellow-500" />
              Recomendações para Você
            </h2>
            <ul className="space-y-4">
              {recommendedCourses.map((course, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {course.icon}
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{course.name}</p>
                      <p className="text-sm text-gray-500">{course.duration}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300">
              Ver Todos os Cursos
            </button>
          </div>

          {/* Notificações */}
          <div className="bg-white p-6 rounded-lg shadow-md col-span-full lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Bell className="mr-2 h-5 w-5 text-red-500" />
              Notificações
            </h2>
            <ul className="space-y-4">
              {notifications.map((notification, index) => (
                <li key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-500">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
              Ver Todas as Notificações
            </button>
          </div>
        </div>

        {/* Seção Adicional: Conquistas Recentes e Próximos Eventos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-purple-500" />
              Conquistas Recentes
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Award className="h-8 w-8 text-yellow-400 mr-3" />
                <div>
                  <p className="font-medium">JavaScript Ninja</p>
                  <p className="text-sm text-gray-500">Completou 10 desafios de JavaScript</p>
                </div>
              </li>
              <li className="flex items-center">
                <Award className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <p className="font-medium">CSS Master</p>
                  <p className="text-sm text-gray-500">Criou 5 layouts responsivos</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-green-500" />
              Próximos Eventos
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="font-medium">Webinar: Tendências Front-end 2024</p>
                <p className="text-sm text-gray-500">15 de Março, 19:00</p>
              </li>
              <li>
                <p className="font-medium">Hackathon: Crie uma Landing Page</p>
                <p className="text-sm text-gray-500">22-23 de Março</p>
              </li>
            </ul>
            <button className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
              Ver Calendário Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}