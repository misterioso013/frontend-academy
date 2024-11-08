'use client'
import { Editor } from '@monaco-editor/react'
import { Code, Cog } from 'lucide-react'
import React, { useState } from 'react'

type CodeEditorColumnProps = {
    htmlCodeDefault?: string
    cssCodeDefault?: string
    jsCodeDefault?: string
}
export function CodeEditorColumn({ htmlCodeDefault, cssCodeDefault, jsCodeDefault }: CodeEditorColumnProps) {
    const [activeTab, setActiveTab] = useState('html')
    const [htmlCode, setHtmlCode] = useState(htmlCodeDefault || '<h1>Olá, Mundo!</h1>')
    const [cssCode, setCssCode] = useState(cssCodeDefault || 'body { font-family: Arial, sans-serif; }')
    const [jsCode, setJsCode] = useState(jsCodeDefault || 'console.log("Bem-vindo ao JavaScript!");')
    const handleCodeChange = (code: string) => {
        switch (activeTab) {
          case 'html':
            setHtmlCode(code)
            break
          case 'css':
            setCssCode(code)
            break
          case 'js':
            setJsCode(code)
            break
        }
      }
    
      const resetCode = () => {
        switch (activeTab) {
          case 'html':
            setHtmlCode('<h1>Olá, Mundo!</h1>')
            break
          case 'css':
            setCssCode('body { font-family: Arial, sans-serif; }')
            break
          case 'js':
            setJsCode('console.log("Bem-vindo ao JavaScript!");')
            break
        }
      }

      const combinedCode = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `
    return(
        <div className="lg:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Editor de Código
              </h2>
              <div className="mb-4">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`py-2 px-4 ${activeTab === 'html' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('html')}
                  >
                    HTML
                  </button>
                  <button
                    className={`py-2 px-4 ${activeTab === 'css' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('css')}
                  >
                    CSS
                  </button>
                  <button
                    className={`py-2 px-4 ${activeTab === 'js' ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('js')}
                  >
                    JavaScript
                  </button>
                </div>
                <Editor
                    height="300px"
                    language={activeTab === 'html' ? 'html' : activeTab === 'css' ? 'css' : 'javascript'}
                    defaultValue={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
                    value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode}
                    onChange={(value) => handleCodeChange(value || "")}
                    theme="vs-dark"
                    options={{
                        minimap: {
                          enabled: false,
                        },
                        fontSize: 16,
                        lineHeight: 26,
                        fontFamily: "JetBrains Mono, Menlo, monospace",
                        fontLigatures: true,
                        wordWrap: "on",
                        tabSize: 2,
                        lineNumbers: "off",
                    }}                 
                />
              </div>
              <div className="flex justify-between mb-4">
                <button onClick={resetCode} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
                  Resetar Código
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Executar
                </button>
              </div>
              <div className="border rounded-md p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Cog className="w-5 h-5 mr-2" />
                  Resultado:
                </h3>
                <iframe
                  title="Code Preview"
                  srcDoc={combinedCode}
                  className="w-full h-48 border rounded"
                />
              </div>
            </div>
          </div>
    )
}