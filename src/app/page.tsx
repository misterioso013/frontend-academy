import { GamificationSection } from '@/components/home/gamification-section'
import { CoursesAndToolsSection } from '@/components/home/courses-and-tools-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { StudentTestimonials } from '@/components/home/ student-testimonials'
import { Hero } from '@/components/home/hero-section'
import { Footer } from '@/components/home/footer'
import { HowItWorks } from '@/components/home/how-it-works'
import { CommunitySection } from '@/components/home/community-section'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <WhyChooseSection />

      {/* Testimonials Section */}
      <StudentTestimonials />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Gamification Section */}
      <GamificationSection />

      {/* Courses and Tools Section */}
      <CoursesAndToolsSection />

      {/* Community Section */}
      <CommunitySection />

      {/* CTA Final Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Está pronto para começar sua jornada de Front-end?</h2>
          <p className="text-xl mb-8">Inscreva-se hoje mesmo e junte-se a milhares de desenvolvedores em formação!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Inscreva-se Agora
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Experimente Grátis
            </button>
          </div>
        </div>
      </section>
      <Footer />
      
    </div>
  )
}