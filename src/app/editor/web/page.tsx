"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useHotkeys } from "react-hotkeys-hook";
import Link from "next/link";
import EditorComponent from "@/components/editor-component";
import { Loader2, Play, Code, FileCode, Coffee, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function EditorWeb() {
  const [html, setHtml] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("html") || "<h1>Olá, Mundo!</h1>"
      : "<h1>Olá, Mundo!</h1>"
  );
  const [css, setCss] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("css") || "h1 { color: #3b82f6; }"
      : "h1 { color: #3b82f6; }"
  );
  const [js, setJs] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("js") || 'console.log("Hello, World!");'
      : 'console.log("Hello, World!");'
  );

  const [srcDoc, setSrcDoc] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [liveReload, setLiveReload] = useState<boolean>(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");

  const saveToLocalStorage = useCallback(() => {
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
  }, [html, css, js]);

  useEffect(() => {
    saveToLocalStorage();
  }, [html, css, js, saveToLocalStorage]);

  const updateSrcDoc = useCallback(() => {
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
      setTitle(titleMatch[1]);
    }
    const headeMatch = html.match(/<head>([\s\S]*?)<\/head>/);
    let head = "";
    if (headeMatch) {
      head = headeMatch[1];
    } 
    head += `<style>${css}</style>`;
    const src = html.replace(/<head>([\s\S]*?)<\/head>/, `<head>${head}</head>`).replace(/<\/body>/, `<script>${js}</script></body>`);
    setSrcDoc(src);
  }, [html, css, js]);

  useEffect(() => {
    if (liveReload) {
      const timeout = setTimeout(updateSrcDoc, 250);
      return () => clearTimeout(timeout);
    }
  }, [html, css, js, liveReload, updateSrcDoc]);

  const handleExecute = useCallback(() => {
    updateSrcDoc();
  }, [updateSrcDoc]);

  useHotkeys(
    "ctrl+s",
    (event) => {
      event.preventDefault();
      if (!liveReload) {
        handleExecute();
      }
    },
    [liveReload, handleExecute],
    { preventDefault: true }
  );

  return (
    <div className="h-screen pb-4 flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Barra de Ferramentas */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Configurações</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AnimatePresence>
            {isSettingsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center space-x-2"
              >
                <Switch
                  checked={liveReload}
                  onCheckedChange={setLiveReload}
                  id="live-reload"
                />
                <label htmlFor="live-reload" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Live Reload
                </label>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link href="/" passHref>
          <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Front-end Editor
          </h1>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
              <Button onClick={handleExecute} variant="default" size="sm" className="hidden md:flex">
                <Play className="h-4 w-4 mr-2" />
                Executar
              </Button>
              <Drawer>
                  <DrawerTrigger onClick={handleExecute} className="md:hidden flex items-center bg-gray-200 dark:bg-gray-800 p-3 rounded-full">
                        <Play className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent className="h-full">
                    <DrawerHeader className="bg-gray-50 dark:bg-gray-800 flex items-center justify-between p-2">
                      <DrawerTitle>{title}</DrawerTitle>
                      <DrawerClose>
                        <X className="h-4 w-4" />
                      </DrawerClose>
                    </DrawerHeader>
                    <iframe
                      srcDoc={srcDoc}
                      title="Live Preview"
                      sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
                      width="100%"
                      height="100%"
                    />
                  </DrawerContent>
              </Drawer>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Executar código</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Layout Principal */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Área dos Editores */}
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full flex flex-col">
            {/* Abas */}
            <div className="flex border-b bg-gray-50 dark:bg-gray-800">
              {[
                { key: "html", icon: <FileCode className="h-4 w-4 mr-2" /> },
                { key: "css", icon: <Code className="h-4 w-4 mr-2" /> },
                { key: "js", icon: <Coffee className="h-4 w-4 mr-2" /> },
              ].map(({ key, icon }) => (
                <Button
                  key={key}
                  onClick={() => setActiveTab(key as "html" | "css" | "js")}
                  variant={activeTab === key ? "default" : "ghost"}
                  className="flex-1 rounded-none"
                >
                  {icon}
                  {key.toUpperCase()}
                </Button>
              ))}
            </div>

            {/* Editor */}
            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {["html", "css", "js"].map((tab) => (
                  activeTab === tab && (
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <EditorComponent
                        language={tab === "js" ? "javascript" : tab}
                        value={tab === "html" ? html : tab === "css" ? css : js}
                        onChange={tab === "html" ? setHtml : tab === "css" ? setCss : setJs}
                        loading={
                          <div className="flex items-center justify-center h-full">
                            <Loader2 className="animate-spin h-10 w-10 text-blue-500" />
                          </div>
                        }
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle className="hidden md:flex" />

        {/* Área do Preview */}
        <ResizablePanel defaultSize={50} minSize={30} className="hidden md:block">
          <div className="h-full bg-white dark:bg-gray-800 shadow-inner overflow-hidden">
            <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {title || "Live Preview"}
              </span>
            </div>
            <iframe
              srcDoc={srcDoc}
              title="Live Preview"
              sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
              width="100%"
              height="100%"
              className="bg-white"
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}