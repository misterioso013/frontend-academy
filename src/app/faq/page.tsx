'use client'
import React, { useState } from 'react'
import { Search, ChevronDown, ChevronUp, Book, Zap, Users, CreditCard, HelpCircle } from 'lucide-react'

const faqData = [
  {
    category: 'Cursos e Conteúdo',
    icon: <Book className="h-6 w-6 text-blue-500" />,
    questions: [
      {
        question: 'Quais tecnologias são abordadas nos cursos?',
        answer: 'Nossos cursos cobrem uma ampla gama de tecnologias front-end, incluindo HTML, CSS, JavaScript, React, Nextjs, Tailwind, e ferramentas modernas de desenvolvimento web.'
      },
      {
        question: 'Com que frequência o conteúdo é atualizado?',
        answer: 'Atualizamos nosso conteúdo regularmente para garantir que esteja alinhado com as últimas tendências e práticas da indústria. Revisamos e atualizamos os cursos trimestralmente, no mínimo.'
      },
      {
        question: 'Os cursos são adequados para iniciantes?',
        answer: 'Sim, temos cursos para todos os níveis de experiência. Nossos cursos para iniciantes são projetados para introduzir conceitos de forma gradual e acessível.'
      }
    ]
  },
  {
    category: 'Plataforma e Funcionalidades',
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    questions: [
      {
        question: 'Como funciona o sistema de gamificação?',
        answer: 'Nosso sistema de gamificação recompensa o progresso e a participação. Você ganha pontos e badges ao completar lições, participar de desafios e ajudar outros alunos. Isso torna o aprendizado mais envolvente e divertido.'
      },
      {
        question: 'Posso acessar o conteúdo offline?',
        answer: 'Atualmente, nossa plataforma é baseada na web e requer uma conexão ativa à internet para acessar o conteúdo. Estamos explorando opções para permitir o acesso offline no futuro.'
      },
      {
        question: 'Existe um aplicativo móvel disponível?',
        answer: 'Atualmente, nossa plataforma é otimizada para navegadores web em dispositivos móveis. Estamos trabalhando no desenvolvimento de um aplicativo nativo e esperamos lançá-lo em breve.'
      }
    ]
  },
  {
    category: 'Comunidade e Suporte',
    icon: <Users className="h-6 w-6 text-green-500" />,
    questions: [
      {
        question: 'Como posso obter ajuda se estiver com dificuldades?',
        answer: 'Oferecemos várias formas de suporte: fóruns da comunidade, sessões de mentoria ao vivo, nossa própria IA (O senhor Webb) e um grupo privado no Telegram. Nossa equipe de suporte também está disponível para ajudar com quaisquer dúvidas.'
      },
      {
        question: 'Quem é o senhor Webb?',
        answer: 'O senhor Webb é nossa IA (Inteligência Artificial) que fornece suporte e orientação personalizados aos alunos. Ele pode responder a perguntas, gerar códigos, fornecer feedback e ajudar a resolver problemas técnicos.'
      },
      {
        question: 'Existem oportunidades de networking?',
        answer: 'Sim, promovemos regularmente eventos online, hackathons e projetos colaborativos que permitem aos alunos se conectarem e trabalharem juntos. Também temos uma comunidade ativa no Telegram para networking e suporte.'
      }
    ]
  },
  {
    category: 'Pagamentos e Planos',
    icon: <CreditCard className="h-6 w-6 text-purple-500" />,
    questions: [
        {
        question: 'Preciso pagar para acessar os cursos?',
        answer: 'Não, todos os nossos cursos são gratuitos e nosso código é aberto. No entanto, oferecemos assinaturas premium para acesso a recursos adicionais, como sessões de mentoria, aulas com professores, projetos práticos e certificados.'
        },
      {
        question: 'Quais são as opções de pagamento disponíveis?',
        answer: 'Aceitamos pagamentos via pix, cartão de crédito e boleto bancário. Também oferecemos opções de pagamento parcelado e descontos para estudantes e educadores. Já em relação a aulas com professores, o pagamento é feito diretamente ao professor.'
      },
      {
        question: 'Existe uma garantia de reembolso?',
        answer: 'Sim, oferecemos uma garantia de reembolso de 20 dias. Se você não estiver satisfeito com o curso, pode solicitar um reembolso total dentro deste período.'
      },
      {
        question: 'Posso cancelar minha assinatura a qualquer momento?',
        answer: 'Sim, você pode cancelar sua assinatura a qualquer momento. Se você cancelar, ainda terá acesso aos recursos premium até o final do ciclo de faturamento atual e poderá continuar acessando o conteúdo gratuito.'
      },
    ]
  },
   {
    category: 'Instrutores e Professores',
    icon: <Users className="h-6 w-6 text-green-500" />,
    questions: [
      {
        question: 'Quem são os instrutores dos cursos?',
        answer: 'Atualmente, nossos cursos foram desenvolvidos por nossa equipe interna de especialistas em tecnologia e design. Também trabalhamos com instrutores convidados e especialistas do setor para fornecer conteúdo adicional.'
      },
      {
        question: 'Como posso me tornar um instrutor?',
        answer: 'Se você é um especialista em uma área específica e deseja compartilhar seu conhecimento com outros, entre em contato conosco para realizar um treinamento e se tornar um instrutor em nossa plataforma.'
      },
      {
        question: 'Os instrutores oferecem aulas particulares?',
        answer: 'Sim, nossos instrutores estão disponíveis para aulas particulares e sessões de mentoria personalizadas. Você pode agendar uma sessão diretamente com o instrutor e discutir suas necessidades e objetivos de aprendizado.'
   }
]
}
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setExpandedQuestions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Perguntas Frequentes</h1>
        
        {/* Barra de Busca */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar perguntas..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Lista de Perguntas e Respostas */}
        {filteredFAQ.length > 0 ? (
          filteredFAQ.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                {category.icon}
                <span className="ml-2">{category.category}</span>
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => (
                  <div key={questionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      className="w-full text-left px-6 py-4 focus:outline-none"
                      onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{item.question}</span>
                        {expandedQuestions[`${categoryIndex}-${questionIndex}`] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    {expandedQuestions[`${categoryIndex}-${questionIndex}`] && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">Nenhuma pergunta encontrada. Tente uma busca diferente.</p>
          </div>
        )}
      </div>
    </div>
  )
}