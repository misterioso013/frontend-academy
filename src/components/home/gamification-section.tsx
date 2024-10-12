import { Award, Star, Zap, Trophy, Target, TrendingUp } from 'lucide-react'

export function GamificationSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 md:h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Gamificação e Sistema de Progresso
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6 text-purple-300">
              Aprenda, Conquiste, Evolua
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Nossa plataforma transforma o aprendizado em uma jornada emocionante. 
              Ganhe pontos, suba de nível e desbloqueie conquistas enquanto domina 
              as habilidades de front-end mais demandadas do mercado.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Award className="h-8 w-8 text-yellow-400" />, title: "Badges", description: "Colecione emblemas por suas realizações" },
                { icon: <Star className="h-8 w-8 text-yellow-400" />, title: "Pontos XP", description: "Ganhe experiência a cada desafio concluído" },
                { icon: <Zap className="h-8 w-8 text-yellow-400" />, title: "Streaks", description: "Mantenha sua sequência de estudos diários" },
                { icon: <Trophy className="h-8 w-8 text-yellow-400" />, title: "Ranking", description: "Compita com outros estudantes no leaderboard" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform -rotate-6"></div>
            <div className="relative bg-gray-800 p-8 rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white">Nível 7</h4>
                  <p className="text-purple-300">Desenvolvedor Júnior</p>
                </div>
                <div className="h-16 w-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">7</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Progresso para o próximo nível</span>
                  <span>65%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full">
                  <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-white mb-3">Próximas Conquistas</h5>
                {[
                  { icon: <Target className="h-5 w-5 text-green-400" />, title: "Mestre do CSS", progress: 80 },
                  { icon: <TrendingUp className="h-5 w-5 text-blue-400" />, title: "Guru do JavaScript", progress: 45 },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">{achievement.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">{achievement.title}</span>
                        <span className="text-gray-400">{achievement.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" style={{width: `${achievement.progress}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                Ver Todas as Conquistas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}