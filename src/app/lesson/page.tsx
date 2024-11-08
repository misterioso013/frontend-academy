'use client'
import { AlertCircle, Zap, ArrowRight} from 'lucide-react'
import { CodeEditorColumn } from '@/components/lesson/code-editor-column';
import { Footer } from '@/components/lesson/footer';
import { motion, useScroll } from "framer-motion"
import { Header } from '@/components/lesson/header';
import { ProgressCourse } from '@/components/lesson/progress-course';
import { ShowCode } from '@/components/lesson/showCode';
import { Alert } from '@/components/lesson/alert';
import { Quiz } from '@/components/lesson/quiz';

export default function LessonPage() {

  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50"></motion.div>
      {/* Header */}
      <Header link={[
        { label: 'Cursos', href: '/cursos', isActive: false },
        { label: 'HTML Básico', href: '/cursos/html-basico', isActive: false },
        { label: 'Aula 1: Introdução', href: '/cursos/html-basico/aula-1', isActive: true }
      ]} />
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lesson content column */}
          <div className="lg:w-2/3">
            <div className="bg-white shadow-md rounded-lg p-6">
              <ProgressCourse />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">O que é HTML?</h2>
                <p className="mb-4">HTML (HyperText Markup Language) é a linguagem padrão para criar páginas web. É a estrutura básica de todas as páginas que você vê na internet.</p>
                <Alert type="warning">
                  <h3 className="flex items-center font-semibold"><AlertCircle className="w-5 h-5 mr-2" /> Dica</h3>
                  <p>Pense no HTML como o esqueleto de uma página web. Ele define a estrutura, mas não o estilo ou comportamento.</p>
                </Alert>
                <img src="https://placeholder.co/2000x800" alt="Estrutura básica de HTML" className="rounded-lg shadow-md mb-4 w-full h-auto" />
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Seu Primeiro Código HTML</h2>
                <p className="mb-4">Vamos criar uma página simples com um cabeçalho "Olá, Mundo!". Este é um exemplo clássico para começar com qualquer linguagem de programação.</p>
                  <ShowCode language='html' code={`<!DOCTYPE html>
<html>
  <head>
    <title>Minha Primeira Página</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>`} />
                <Alert type="info">
                  <h3 className="flex items-center font-semibold"><Zap className="w-5 h-5 mr-2" /> Agora, tente você!</h3>
                  <p>Use o editor de código ao lado para escrever seu próprio "Olá, Mundo!" em HTML.</p>
                </Alert>
              </section>

                <Quiz 
                  question="Qual é a tag HTML usada para criar um cabeçalho de nível 1?"
                  options={['<h1>', '<header>', '<title>', '<head>']}
                  correctAnswer="<h1>"
                />

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Próximos Passos</h2>
                <p className="mb-4">Parabéns por completar esta introdução ao HTML! Na próxima aula, vamos explorar mais tags HTML e como estruturar uma página completa.</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center">
                  Próxima Aula: Estrutura de uma Página HTML
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </section>
            </div>
          </div>

          {/* Code editor column */}
          <CodeEditorColumn />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}