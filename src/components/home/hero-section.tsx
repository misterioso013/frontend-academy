import Link from "next/link"
import { Button } from "../ui/button"
export function Hero(){
    return(
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/predio-noite.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Domine o Front-end de Forma Simples e Divertida
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 animate-fade-in-up animation-delay-200">
            A plataforma interativa e gamificada para aprender HTML, CSS, JavaScript e os frameworks mais usados, de forma descomplicada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link href="/login">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Comece Agora
                </Button>
            </Link>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Experimente um Gerador de Código
            </Button>
          </div>
        </div>
      </section>
    )
}