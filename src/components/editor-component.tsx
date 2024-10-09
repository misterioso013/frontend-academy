/**
 * Esse componente foi inspirado no repositório: 
 * - https://github.com/maykbrito/fronteditorv2
 */
"use client";

import React, { memo } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { Loader2 } from "lucide-react";
import * as monacoEditor from "monaco-editor";
import {
  emmetHTML,
  emmetCSS,
  emmetJSX,
  registerCustomSnippets,
} from "emmet-monaco-es";

interface EditorComponentProps {
  language: "html" | "css" | "javascript";
  value: string;
  onChange: (value: string) => void;
  loading?: React.ReactNode;
  options?: monacoEditor.editor.IStandaloneEditorConstructionOptions;
}

const EditorComponent: React.FC<EditorComponentProps> = ({
  language,
  value,
  onChange,
  loading,
  options,
}) => {
  // Função para adicionar Emmet conforme a linguagem
  const addEmmet = (monaco: Monaco) => {
    switch (language) {
      case "html":
        // Inicializa Emmet para HTML e linguagens compatíveis (ex: PHP)
        emmetHTML(monaco, ["html", "php"]);
        break;
      case "css":
        // Inicializa Emmet para CSS e linguagens compatíveis (ex: SCSS, LESS)
        emmetCSS(monaco, ["css", "scss", "less"]);
        break;
      case "javascript":
        // Inicializa Emmet para JSX (compatível com JavaScript/TypeScript)
        emmetJSX(monaco, ["javascript", "typescript", "jsx", "tsx"]);
        break;
      default:
        break;
    }

    // Registro de snippets personalizados
    registerCustomSnippets("html", {
      ull: "ul>li[id=${1} class=${2}]*2{ Item $2 }",
      oll: "<ol><li id=${1} class=${2}>Item $2</li></ol>",
      ran: "{ $1 }",
    });

    registerCustomSnippets("css", {
      flt: "float: ${1};",
      mtop: "margin-top: ${1}px;",
      mbot: "margin-bottom: ${1}px;",
    });

    registerCustomSnippets("javascript", {
      log: "console.log(${1});",
      func: "function ${1}(${2}) {\n  ${3}\n}",
    });
  };

  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      onChange={(value) => onChange(value || "")}
      theme="vs-dark"
      loading={
        loading || (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="animate-spin h-10 w-10 text-blue-500" />
          </div>
        )
      }
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
        ...options,
      }}
      beforeMount={(monaco) => {
        addEmmet(monaco); // Inicializa Emmet antes do editor montar
      }}
    />
  );
};

// memo evita re-renderizações desnecessárias, melhorando a performance
export default memo(EditorComponent);
