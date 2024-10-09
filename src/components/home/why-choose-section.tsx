'use client'

import { useState } from 'react'
import { Code, Book, Zap, Edit3, Users, Award, Rocket, Coffee } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
export function WhyChooseSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Geradores Automatizados por IA",
      description: "Crie HTML, CSS e JavaScript instantaneamente com nossos geradores inteligentes. Economize tempo e aprenda com exemplos práticos gerados pela IA.",
      detail: "Nossa tecnologia de IA analisa as melhores práticas de codificação e gera exemplos personalizados para seu nível de habilidade, ajudando você a aprender e implementar código de qualidade mais rapidamente.",
      link: "#",
      target_blank: false
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Aprendizado Gamificado",
      description: "Missões e desafios interativos que tornam o aprendizado divertido para qualquer idade. Ganhe pontos, suba de nível e desbloqueie conquistas.",
      detail: "Nosso sistema de gamificação foi projetado por especialistas em educação para manter você motivado e engajado. Complete desafios diários, participe de competições e acompanhe seu progresso em tempo real.",
      link: "#",
      target_blank: false
    },
    {
      icon: <Book className="h-8 w-8 text-green-400" />,
      title: "Suporte a Frameworks Modernos",
      description: "Aprenda a usar React, Vue, Next.js e Tailwind com exemplos práticos. Mantenha-se atualizado com as tecnologias mais recentes do mercado.",
      detail: "Oferecemos cursos especializados e projetos práticos para os frameworks mais populares, garantindo que você esteja sempre um passo à frente no mercado de trabalho.",
      link: "#",
      target_blank: false
    },
    {
      icon: <Edit3 className="h-8 w-8 text-purple-400" />,
      title: "Editor de Código Online",
      description: "Teste e experimente código diretamente no navegador, sem necessidade de instalar nada. Ambiente de desenvolvimento completo no navegador.",
      detail: "Nosso editor online inclui suporte a HTML, CSS e JavaScript, além de ferramentas avançadas como autocompletar, realce de sintaxe e visualização em tempo real, permitindo que você experimente e aprenda de forma interativa.",
      link: "/editor/web",
      target_blank: false
    },
    {
      icon: <Users className="h-8 w-8 text-red-400" />,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros desenvolvedores, participe de discussões e colabore em projetos reais. Aprenda com os melhores e compartilhe seu conhecimento.",
      detail: "Nossa comunidade conta com fóruns ativos, eventos ao vivo, hackathons e oportunidades de networking, ajudando você a construir conexões valiosas na indústria de tecnologia.",
      link: "https://forum.vemser.tech",
      target_blank: true
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-400" />,
      title: "Certificações Reconhecidas",
      description: "Obtenha certificados validados pela indústria ao concluir nossos cursos. Impulsione sua carreira com credenciais respeitadas.",
      detail: "Nossas certificações são reconhecidas por empresas líderes em tecnologia e podem ser compartilhadas diretamente em seu perfil LinkedIn, aumentando suas chances de conseguir o emprego dos sonhos.",
        link: "#",
        target_blank: false
    },
    {
      icon: <Rocket className="h-8 w-8 text-orange-400" />,
      title: "Projetos do Mundo Real",
      description: "Aplique suas habilidades em projetos práticos que simulam desafios reais do mercado. Construa um portfólio impressionante enquanto aprende.",
      detail: "Trabalhamos com empresas parceiras para oferecer projetos baseados em casos reais, permitindo que você ganhe experiência prática e se destaque no mercado de trabalho.",
        link: "#",
        target_blank: false
    },
    {
      icon: <Coffee className="h-8 w-8 text-brown-400" />,
      title: "Suporte Personalizado",
      description: "Receba orientação individual de mentores experientes. Tire suas dúvidas e obtenha feedback personalizado sobre seus projetos.",
      detail: "Nossa equipe de mentores inclui profissionais experientes da indústria, prontos para oferecer orientação personalizada e ajudar você a superar desafios específicos em sua jornada de aprendizado.",
      link: "#",
      target_blank: false
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Por que Escolher a Front-end Academy?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 ease-in-out cursor-pointer ${
                  activeFeature === index
                    ? 'bg-blue-600 shadow-lg transform scale-105'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className={`mt-2 ${activeFeature === index ? 'text-gray-100' : 'text-gray-400'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl md:sticky top-24 z-10">
            <div className="flex items-center space-x-4 mb-6">
              {features[activeFeature].icon}
              <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
            </div>
            <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Saiba mais:</h4>
              <p className="text-gray-400">{features[activeFeature].detail}</p>
            </div>
            <Link href={features[activeFeature].link} target={features[activeFeature].target_blank ? "_blank" : "_self"}>
                <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Explorar este Recurso
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}