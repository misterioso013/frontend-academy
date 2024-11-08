'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Video, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const communityFeatures = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Networking Global",
    description: "Conecte-se com desenvolvedores de todo o mundo e expanda sua rede profissional."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-green-500" />,
    title: "Fóruns de Discussão",
    description: "Participe de discussões animadas sobre as últimas tendências e tecnologias de front-end."
  },
  {
    icon: <Video className="h-8 w-8 text-purple-500" />,
    title: "Sessões de Código ao Vivo",
    description: "Assista e participe de sessões de codificação ao vivo com especialistas da indústria."
  },
  {
    icon: <Calendar className="h-8 w-8 text-red-500" />,
    title: "Eventos e Hackathons",
    description: "Participe de eventos exclusivos e hackathons para testar suas habilidades e ganhar prêmios."
  }
]


export function CommunitySection() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Junte-se à Nossa Comunidade Vibrante
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Pronto para se Juntar à Comunidade?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Faça parte de uma comunidade de desenvolvedores apaixonados, aprenda com os melhores e acelere sua carreira em front-end.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Comece Agora Gratuitamente
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}