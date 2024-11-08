import { Button } from '@/components/ui/button'
import { Rocket, Users, BookOpen, Award, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Rosiel Victor',
    role: 'Fundador e CEO',
    bio: 'Desenvolvedor Full-stack com mais de sei lá quantos anos de experiência. Apaixonado por ensinar e compartilhar conhecimento mesmo que ninguém peça.',
    image: 'https://github.com/misterioso013.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/rosielvictor',
      github: 'https://github.com/misterioso013',
      twitter: 'https://twitter.com/rvictor013'
    }
  },
  
]

const milestones = [
    { year: 2023, event: 'Pensamos em criar a Front-end Academy' },
    { year: 2024, event: 'Lançamos a Front-end Academy' },
    { year: 2025, event: 'Atingimos 1 milhão de alunos (será?)' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-16">Sobre a Front-end Academy</h1>
        <section className="mb-24">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
              <Rocket className="h-8 w-8 text-blue-500 mr-3" />
              Nossa Missão e Visão
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Na Front-end Academy, nossa missão é capacitar indivíduos de todos os níveis e idades a dominarem as habilidades de desenvolvimento front-end, proporcionando uma educação acessível, prática e de alta qualidade.
            </p>
            <p className="text-lg text-gray-700">
              Nossa visão é nos tornarmos referência de aprendizado de desenvolvimento web, criando uma comunidade vibrante de desenvolvedores inovadores e impulsionando o futuro da web.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12 flex items-center justify-center">
            <Users className="h-8 w-8 text-blue-500 mr-3" />
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* História do Projeto */}
        <section className="mb-24">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              A Front-end Academy nasceu da paixão e da frustração de um desenvolvedor que não encontrava nada de novo no mercado de cursos de desenvolvimento web. Com o objetivo de revolucionar a forma como as pessoas aprendem front-end, a Front-end Academy foi lançada em 2024.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marcos Importantes</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <Award className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-semibold">{milestone.year}:</span> {milestone.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-blue-600 rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Junte-se à Nossa Comunidade</h2>
            <p className="text-xl text-blue-100 mb-8">
              Faça parte da revolução do aprendizado front-end e comece sua jornada conosco hoje!
            </p>
            <Link href="/dashboard">
                <Button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
                Comece Agora
                </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}