import { dracula } from "@codesandbox/sandpack-themes";
import { Sandpack } from "@codesandbox/sandpack-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Playground de React - Front-end Academy",
    description: "Editor de React para testar códigos em tempo real sem precisar instalar nada.",
}

export default function ReactEditorPage() {
    const files = {}
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <Link href="/tools" passHref className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300">
                    <ArrowLeft className="h-6 w-6" /> Voltar
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Editor de React</h1>
            </div>
            <Sandpack
            files={files} 
            theme={dracula}
            template="react" 
            options={{
                layout: "preview",
                showConsole: false,
                showConsoleButton: true,
                showInlineErrors: true,
                showNavigator: true,
                showLineNumbers: true,
                showTabs: true,
                editorHeight: "86vh",
            }}
            />
        </div>
    </div>
  )  

}