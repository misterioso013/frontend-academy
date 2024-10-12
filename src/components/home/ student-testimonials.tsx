'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Desenvolvedora Front-end",
    avatar: "https://placehold.co/100x100",
    quote: "A Front-end Academy transformou minha carreira. Os cursos práticos e o suporte da comunidade me ajudaram a conseguir meu primeiro emprego como desenvolvedora.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Estudante de Ciência da Computação",
    avatar: "https://placehold.co/100x100",
    quote: "Os projetos práticos e desafios semanais realmente solidificaram meu aprendizado. Agora me sinto confiante para criar qualquer interface web.",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Designer UX/UI",
    avatar: "https://placehold.co/100x100",
    quote: "Como designer, eu precisava aprender a implementar meus designs. A Front-end Academy me deu as habilidades necessárias para colaborar melhor com os desenvolvedores.",
    rating: 4
  }
]

export function StudentTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-400 to-indigo-800 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          O que Nossos Alunos Dizem
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <Avatar className="w-24 h-24 border-4 border-blue-500 shadow-lg">
                      <AvatarImage src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                      <AvatarFallback>{testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                        <Quote className="w-8 h-8 text-blue-500 opacity-50 inline-block mr-2" />
                        {testimonials[currentTestimonial].quote}
                      </blockquote>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-2 md:-ml-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-300" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-2 md:-mr-8">
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-300" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                currentTestimonial === index ? 'bg-blue-500 w-6' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}