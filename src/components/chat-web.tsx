"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
interface ChatComponentProps {
    initialMessage?: string;
    html: string;
    css: string;
    js: string;
    messages: Message[];
    setHtml: (html: string) => void;
    setCss: (css: string) => void;
    setJs: (js: string) => void;
}

type Message = {
    id: number
    text: string
    sender: "user" | "other"
  }

export const ChatWeb: React.FC<ChatComponentProps> = ({ initialMessage = "" }) => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Olá! Como posso ajudar você hoje?", sender: "other" },
        { id: 2, text: "Oi! Estou com uma dúvida sobre o produto.", sender: "user" },
      ])
      const [newMessage, setNewMessage] = useState("")
    
      const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
          setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "user" }])
          setNewMessage("")
        }
      }

      return (
        <div className="flex flex-col h-[540px] w-full mx-auto overflow-hidden bg-background">
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4 pb-16">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "other" && (
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex space-x-2"
            >
              <Input
                type="text"
                placeholder="Digite sua mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar mensagem</span>
              </Button>
            </form>
          </div>
        </div>
      )
};
