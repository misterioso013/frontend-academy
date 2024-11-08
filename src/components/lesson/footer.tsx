import { Award, Home, MessageSquare, Share2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return(
        <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link href="https://forum.vemser.tech" className="text-blue-600 hover:text-blue-800 flex items-center justify-center" target="_blank">
                <MessageSquare className="w-5 h-5 mr-1" />
                <span className="md:inline">Fórum de Suporte</span>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
                <Award className="w-5 h-5 mr-1" />
                <span className="md:inline">Ver Progresso</span>
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center justify-center">
                <Home className="w-5 h-5 mr-1" />
                <span className="md:inline">Índice de Aulas</span>
              </Link>
            </div>
            <div>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center justify-center w-full md:w-auto">
                <Share2 className="w-5 h-5 mr-2" />
                Compartilhar Progresso
              </button>
            </div>
          </div>
        </div>
      </footer>
    )
}