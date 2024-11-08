'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Code, Users, Award, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const steps = [
  {
    icon: <Book className="w-12 h-12 text-blue-500" />,
    title: "Aprenda no Seu Ritmo",
    description: "Acesse cursos estruturados e recursos de aprendizagem adaptados ao seu nível de habilidade.",
    details: "Nossos cursos são projetados para serem flexíveis. Você pode aprender quando e onde quiser, com conteúdo que se adapta ao seu progresso e estilo de aprendizagem.",
    link: "/cursos",
    target_blank: false
  },
  {
    icon: <Code className="w-12 h-12 text-green-500" />,
    title: "Pratique com Projetos Reais",
    description: "Aplique seus conhecimentos em projetos práticos que simulam cenários do mundo real.",
    details: "Cada módulo inclui projetos desafiadores que você construirá do zero. Estes projetos não só reforçam o que você aprendeu, mas também formam um portfólio impressionante para mostrar aos empregadores.",
    link: "/cursos",
    target_blank: false
  },
  {
    icon: <Users className="w-12 h-12 text-purple-500" />,
    title: "Colabore e Conecte-se",
    description: "Junte-se a uma comunidade vibrante de desenvolvedores para aprendizagem colaborativa e networking.",
    details: "Participe de fóruns de discussão, sessões de codificação em grupo e hackathons. Construa conexões que durarão além do seu tempo na academia.",
    link: "https://forum.vemser.tech",
    target_blank: true
  },
  {
    icon: <Award className="w-12 h-12 text-yellow-500" />,
    title: "Obtenha Certificação",
    description: "Ganhe certificados reconhecidos pela indústria à medida que progride em sua jornada de aprendizado.",
    details: "Nossas certificações são reconhecidas por empresas líderes em tecnologia. Cada certificado que você ganha é uma prova tangível de suas habilidades e conhecimentos adquiridos.",
    link: "/cursos",
    target_blank: false
  }
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Como Funciona a Front-end Academy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeStep === index ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-center">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{steps[activeStep].title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{steps[activeStep].details}</p>
          <Link href={steps[activeStep].link} target={steps[activeStep].target_blank ? "_blank" : "_self"}>
            <Button className="group">
              Saiba Mais
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Pronto para Começar Sua Jornada?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já estão transformando suas carreiras com a Front-end Academy. 
            Comece sua jornada para se tornar um desenvolvedor front-end de sucesso hoje!
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Inscreva-se Agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}