import React, { useState } from 'react'
import conffeti from 'canvas-confetti'
import {motion} from "framer-motion"
import { ArrowRight, Zap } from 'lucide-react'
type QuizProps = {
    question: string
    options: string[]
    correctAnswer: string
    onSubmit?: (answer: string) => void
}

export function Quiz({ question, options, correctAnswer, onSubmit }: QuizProps) {
    const [answer, setAnswer] = useState('')
    const [showFeedback, setShowFeedback] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setShowFeedback(true)
        if (answer === correctAnswer) {
            conffeti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6, x: 0.2 }
            })
        }
        if (onSubmit) {
            onSubmit(answer)
        }}

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
        >
            <h2 className="text-2xl font-semibold mb-4">{question}</h2>
            <form onSubmit={handleSubmit}>
                {options.map((option, index) => (
                    <label key={index} className="block mb-2">
                        <input
                            type="radio"
                            name="quiz"
                            value={option}
                            checked={answer === option}
                            onChange={() => setAnswer(option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
                    Enviar
                </button>
            </form>
            {showFeedback && (
                <div className="mt-4">
                    {answer === correctAnswer ? (
                        <p className="text-green-500">
                            <Zap className="w-6 h-6 inline-block" /> Correto!
                        </p>
                    ) : (
                        <p className="text-red-500">
                            <ArrowRight className="w-6 h-6 inline-block" /> Resposta incorreta. Tente novamente.
                        </p>
                    )}
                </div>
            )}
        </motion.div>
    )
}