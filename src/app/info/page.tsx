'use client'
import React, { useState } from 'react'
import { FileText, Shield, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const legalSections = [
  {
    title: 'Termos de Uso',
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    content: `
      <h2 class="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
      <p class="mb-4">Ao acessar e usar a plataforma Front-end Academy, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.</p>

      <h2 class="text-2xl font-semibold mb-4">2. Uso da Plataforma</h2>
      <p class="mb-4">Você concorda em usar a Front-end Academy apenas para fins legais e de acordo com estes termos. Você não deve usar a plataforma de maneira que possa danificar, desativar, sobrecarregar ou prejudicar o site.</p>

      <h2 class="text-2xl font-semibold mb-4">3. Contas de Usuário</h2>
      <p class="mb-4">Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em notificar imediatamente a Front-end Academy sobre qualquer uso não autorizado de sua conta.</p>

      <h2 class="text-2xl font-semibold mb-4">4. Conteúdo do Usuário</h2>
      <p class="mb-4">Ao enviar conteúdo para a plataforma, você concede à Front-end Academy uma licença mundial, não exclusiva e isenta de royalties para usar, reproduzir e distribuir esse conteúdo em conexão com o serviço.</p>

      <h2 class="text-2xl font-semibold mb-4">5. Propriedade Intelectual</h2>
      <p class="mb-4">Todo o conteúdo, recursos e funcionalidades da Front-end Academy estão sob a licença <strong>CC BY-NC-SA 4.0</strong>. Você não pode copiar, modificar, distribuir, vender ou alugar qualquer parte da plataforma sem permissão.</p>

      <h2 class="text-2xl font-semibold mb-4">6. Limitação de Responsabilidade</h2>
      <p class="mb-4">A Front-end Academy não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo perda de lucros, resultantes do seu uso da plataforma.</p>

      <h2 class="text-2xl font-semibold mb-4">7. Modificações dos Termos</h2>
      <p class="mb-4">Reservamo-nos o direito de modificar estes termos a qualquer momento. Continuaremos a postar as alterações nesta página e atualizaremos a data da "última modificação".</p>

      <p class="mt-8 text-sm text-gray-600">Última modificação: 13 de Outubro de 2024</p>
    `
  },
  {
    title: 'Política de Privacidade',
    icon: <Shield className="h-6 w-6 text-green-500" />,
    content: `
      <h2 class="text-2xl font-semibold mb-4">1. Coleta de Informações</h2>
      <p class="mb-4">Coletamos informações que você nos fornece diretamente, como ao criar uma conta, preencher formulários ou se comunicar conosco. Também coletamos automaticamente certos dados de uso e dispositivo quando você interage com nossa plataforma.</p>

      <h2 class="text-2xl font-semibold mb-4">2. Uso de Informações</h2>
      <p class="mb-4">Usamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações, enviar comunicações relacionadas ao serviço e para fins de segurança e prevenção de fraudes.</p>

      <h2 class="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
      <p class="mb-4">Não vendemos suas informações pessoais. Compartilhamos informações apenas com prestadores de serviços que nos ajudam a operar nossa plataforma, ou quando exigido por lei.</p>

      <h2 class="text-2xl font-semibold mb-4">4. Segurança de Dados</h2>
      <p class="mb-4">Implementamos medidas de segurança projetadas para proteger suas informações pessoais contra acesso não autorizado e uso indevido. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.</p>

      <h2 class="text-2xl font-semibold mb-4">5. Seus Direitos e Escolhas</h2>
      <p class="mb-4">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Também pode optar por não receber comunicações de marketing a qualquer momento.</p>

      <h2 class="text-2xl font-semibold mb-4">6. Alterações nesta Política</h2>
      <p class="mb-4">Podemos atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer alterações materiais publicando a nova política de privacidade nesta página.</p>

      <p class="mt-8 text-sm text-gray-600">Última atualização: 13 de Outubro de 2024</p>
    `
  },
  {
    title: 'Cookies e Consentimento',
    icon: <Cookie className="h-6 w-6 text-yellow-500" />,
    content: `
      <h2 class="text-2xl font-semibold mb-4">1. O que são Cookies?</h2>
      <p class="mb-4">Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente e fornecer informações aos proprietários do site.</p>

      <h2 class="text-2xl font-semibold mb-4">2. Como Usamos os Cookies</h2>
      <p class="mb-4">Utilizamos cookies para melhorar sua experiência de navegação, analisar o uso do site e personalizar o conteúdo. Alguns cookies são essenciais para o funcionamento do site, enquanto outros nos ajudam a melhorar o desempenho e a experiência do usuário.</p>

      <h2 class="text-2xl font-semibold mb-4">3. Tipos de Cookies que Usamos</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Cookies essenciais: Necessários para o funcionamento básico do site.</li>
        <li>Cookies de desempenho: Ajudam-nos a entender como os visitantes interagem com o site.</li>
        <li>Cookies de funcionalidade: Permitem que o site lembre escolhas que você faz para fornecer uma experiência mais personalizada.</li>
        <li>Cookies de publicidade: Usados para fornecer anúncios mais relevantes para você e seus interesses.</li>
      </ul>

      <h2 class="text-2xl font-semibold mb-4">4. Seu Consentimento</h2>
      <p class="mb-4">Ao continuar a usar nosso site, você concorda com o uso de cookies conforme descrito nesta política. Você pode retirar seu consentimento a qualquer momento alterando as configurações do seu navegador para rejeitar cookies.</p>

      <h2 class="text-2xl font-semibold mb-4">5. Gerenciando Cookies</h2>
      <p class="mb-4">A maioria dos navegadores permite que você gerencie suas preferências de cookies. Você pode ajustar suas configurações de navegador para recusar cookies ou alertá-lo quando os cookies estão sendo enviados. No entanto, observe que isso pode afetar a funcionalidade do nosso site.</p>

      <h2 class="text-2xl font-semibold mb-4">6. Atualizações na Política de Cookies</h2>
      <p class="mb-4">Podemos atualizar esta política de cookies periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nosso uso de cookies.</p>

      <p class="mt-8 text-sm text-gray-600">Última atualização: 13 de Outubro de 2024</p>
    `
  }
]

export default function LegalPages() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Informações Legais</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex border-b">
            {legalSections.map((section, index) => (
              <button
                key={index}
                className={`flex-1 py-4 px-6 text-center font-medium focus:outline-none transition-colors duration-200 ${
                  activeSection === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveSection(index)}
              >
                <div className="flex items-center justify-center">
                  {section.icon}
                  <span className="ml-2">{section.title}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: legalSections[activeSection].content }} />
          </div>
        </div>

        <div className="mt-8 bg-blue-100 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Precisa de ajuda?</h2>
          <p className="text-blue-700">
            Se você tiver alguma dúvida sobre nossas políticas ou termos, não hesite em entrar em contato com nossa equipe de suporte.
          </p>
          <Link href="/contact">
            <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
                Contate-nos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}