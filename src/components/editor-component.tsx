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
        monaco.editor.defineTheme("vs-dark", {
          base: "vs-dark",
          inherit: true,
          rules: [
            {
              background: "282a36",
              token: ""
            },
            {
              foreground: "6272a4",
              token: "comment"
            },
            {
              foreground: "f1fa8c",
              token: "string"
            },
            {
              foreground: "bd93f9",
              token: "constant.numeric"
            },
            {
              foreground: "bd93f9",
              token: "constant.language"
            },
            {
              foreground: "bd93f9",
              token: "constant.character"
            },
            {
              foreground: "bd93f9",
              token: "constant.other"
            },
            {
              foreground: "ffb86c",
              token: "variable.other.readwrite.instance"
            },
            {
              foreground: "ff79c6",
              token: "constant.character.escaped"
            },
            {
              foreground: "ff79c6",
              token: "constant.character.escape"
            },
            {
              foreground: "ff79c6",
              token: "string source"
            },
            {
              foreground: "ff79c6",
              token: "string source.ruby"
            },
            {
              foreground: "ff79c6",
              token: "keyword"
            },
            {
              foreground: "ff79c6",
              token: "storage"
            },
            {
              foreground: "8be9fd",
              fontStyle: "italic",
              token: "storage.type"
            },
            {
              foreground: "50fa7b",
              fontStyle: "underline",
              token: "entity.name.class"
            },
            {
              foreground: "50fa7b",
              fontStyle: "italic underline",
              token: "entity.other.inherited-class"
            },
            {
              foreground: "50fa7b",
              token: "entity.name.function"
            },
            {
              foreground: "ffb86c",
              fontStyle: "italic",
              "token": "variable.parameter"
            },
            {
              foreground: "ff79c6",
              token: "entity.name.tag"
            },
            {
              foreground: "50fa7b",
              token: "entity.other.attribute-name"
            },
            {
              foreground: "8be9fd",
              token: "support.function"
            },
            {
              foreground: "6be5fd",
              token: "support.constant"
            },
            {
              foreground: "66d9ef",
              fontStyle: " italic",
              token: "support.type"
            },
            {
              foreground: "66d9ef",
              fontStyle: " italic",
              token: "support.class"
            },
            {
              foreground: "f8f8f0",
              background: "ff79c6",
              token: "invalid"
            },
            {
              foreground: "f8f8f0",
              background: "bd93f9",
              token: "invalid.deprecated"
            },
            {
              foreground: "cfcfc2",
              token: "meta.structure.dictionary.json string.quoted.double.json"
            },
            {
              foreground: "6272a4",
              token: "meta.diff"
            },
            {
              foreground: "6272a4",
              token: "meta.diff.header"
            },
            {
              foreground: "ff79c6",
              token: "markup.deleted"
            },
            {
              foreground: "50fa7b",
              token: "markup.inserted"
            },
            {
              foreground: "e6db74",
              token: "markup.changed"
            },
            {
              foreground: "bd93f9",
              token: "constant.numeric.line-number.find-in-files - match"
            },
            {
              foreground: "e6db74",
              token: "entity.name.filename"
            },
            {
              foreground: "f83333",
              token: "message.error"
            },
            {
              foreground: "eeeeee",
              token: "punctuation.definition.string.begin.json - meta.structure.dictionary.value.json"
            },
            {
              foreground: "eeeeee",
              token: "punctuation.definition.string.end.json - meta.structure.dictionary.value.json"
            },
            {
              foreground: "8be9fd",
              token: "meta.structure.dictionary.json string.quoted.double.json"
            },
            {
              foreground: "f1fa8c",
              token: "meta.structure.dictionary.value.json string.quoted.double.json"
            },
            {
              foreground: "50fa7b",
              token: "meta meta meta meta meta meta meta.structure.dictionary.value string"
            },
            {
              foreground: "ffb86c",
              token: "meta meta meta meta meta meta.structure.dictionary.value string"
            },
            {
              foreground: "ff79c6",
              token: "meta meta meta meta meta.structure.dictionary.value string"
            },
            {
              foreground: "bd93f9",
              token: "meta meta meta meta.structure.dictionary.value string"
            },
            {
              foreground: "50fa7b",
              token: "meta meta meta.structure.dictionary.value string"
            },
            {
              foreground: "ffb86c",
              token: "meta meta.structure.dictionary.value string"
            }
          ],
          colors: {
            "editor.foreground": "#f8f8f2",
            "editor.background": "#282a36",
            "editor.selectionBackground": "#44475a",
            "editor.lineHighlightBackground": "#44475a",
            "editorCursor.foreground": "#f8f8f0",
            "editorWhitespace.foreground": "#3B3A32",
            "editorIndentGuide.activeBackground": "#9D550FB0",
            "editor.selectionHighlightBorder": "#222218"
          }
        });
      }}
    />
  );
};

// memo evita re-renderizações desnecessárias, melhorando a performance
export default memo(EditorComponent);
