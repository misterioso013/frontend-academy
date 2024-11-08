'use client'
import React, { useState } from 'react'
import { User, Mail, Phone, MapPin, Book, Award, Settings, Edit, Lock, Bell, Eye, EyeOff, ChevronRight, ArrowLeft } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    location: 'São Paulo, SP',
    profilePicture: '/placeholder.svg?height=200&width=200',
  })
  const [password, setPassword] = useState('')
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  })
  const [privacy, setPrivacy] = useState({
    profilePublic: true,
  })

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
    if (isEditing) {
      // Here you would typically save the changes to the backend
      console.log('Saving user data:', user)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleNotificationChange = (type: 'email' | 'push') => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }))
  }

  const handlePrivacyChange = () => {
    setPrivacy(prev => ({ ...prev, profilePublic: !prev.profilePublic }))
  }

  const handleGoBack = () => {
    // This function would typically handle navigation back to the previous page
    console.log('Navigating back...')
  }

  const achievements = [
    { name: 'HTML Master', icon: <Award className="h-6 w-6 text-yellow-400" />, description: 'Completed all HTML courses' },
    { name: 'CSS Wizard', icon: <Award className="h-6 w-6 text-purple-400" />, description: 'Styled 50 web pages' },
    { name: 'JS Ninja', icon: <Award className="h-6 w-6 text-green-400" />, description: 'Solved 100 JavaScript challenges' },
  ]

  const completedCourses = [
    { name: 'Introdução ao HTML', date: '2023-05-15' },
    { name: 'CSS Básico', date: '2023-06-02' },
    { name: 'JavaScript Fundamentos', date: '2023-07-10' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleGoBack}
          className="mb-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar
        </button>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white">
              <div className="text-center">
                <img
                  className="h-32 w-32 rounded-full mx-auto mb-4 border-4 border-white"
                  src={user.profilePicture}
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="mt-2">Estudante Front-end</p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{user.location}</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Informações Pessoais</h3>
                <button
                  onClick={handleEditToggle}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  {isEditing ? 'Salvar' : 'Editar'}
                  <Edit className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Localização
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={user.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-2xl font-semibold mb-6">Progressão e Conquistas</h3>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Progresso Geral</h4>
              <Progress value={75} className="w-full" />
              <p className="text-sm text-gray-600 mt-2">75% do curso completo</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-4">Conquistas</h4>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      {achievement.icon}
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Cursos Completados</h4>
                <ul className="space-y-2">
                  {completedCourses.map((course, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span>{course.name}</span>
                      <span className="text-sm text-gray-600">{course.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-8">
            <h3 className="text-2xl font-semibold mb-6">Configurações da Conta</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-4">Alterar Senha</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Nova senha"
                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-2 bg-gray-200 rounded-md"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Preferências de Notificação</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Notificações por Email</span>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={() => handleNotificationChange('email')}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Notificações Push</span>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={() => handleNotificationChange('push')}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Opções de Privacidade</h4>
                <div className="flex items-center justify-between">
                  <span>Perfil Público</span>
                  <Switch
                    checked={privacy.profilePublic}
                    onCheckedChange={handlePrivacyChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}