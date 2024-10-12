'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { RefreshCw, Check, Sliders } from 'lucide-react'
import { Slider } from "@/components/ui/slider"

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function adjustColorBrightness(color: string, amount: number) {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const newR = Math.max(0, Math.min(255, r + amount))
  const newG = Math.max(0, Math.min(255, g + amount))
  const newB = Math.max(0, Math.min(255, b + amount))

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
}

export function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState(generateRandomColor())
  const [palette, setPalette] = useState<string[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [hueShift, setHueShift] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [brightness, setBrightness] = useState(0)

  const generatePalette = useCallback(() => {
    const newPalette = [
      adjustColorBrightness(baseColor, -100 + brightness),
      adjustColorBrightness(baseColor, -50 + brightness),
      baseColor,
      adjustColorBrightness(baseColor, 50 + brightness),
      adjustColorBrightness(baseColor, 100 + brightness),
    ]
    setPalette(newPalette)
  }, [baseColor, brightness])

  useEffect(() => {
    generatePalette()
  }, [baseColor, hueShift, saturation, brightness, generatePalette])

  const handleGenerateNewPalette = () => {
    setBaseColor(generateRandomColor())
  }

  const handleCopyColor = (color: string, index: number) => {
    navigator.clipboard.writeText(color)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleHueShiftChange = (value: number[]) => {
    setHueShift(value[0])
  }

  const handleSaturationChange = (value: number[]) => {
    setSaturation(value[0])
  }

  const handleBrightnessChange = (value: number[]) => {
    setBrightness(value[0])
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Paleta de Cores */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {palette.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
              style={{ backgroundColor: color }}
              onClick={() => handleCopyColor(color, index)}
            >
              {copiedIndex === index && (
                <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                  <Check className="text-white h-8 w-8" />
                </div>
              )}
            </div>
            <p className="mt-2 text-sm font-mono">{color}</p>
          </div>
        ))}
      </div>

      {/* Botão para Gerar Nova Paleta */}
      <div className="flex justify-center">
        <button
          onClick={handleGenerateNewPalette}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Gerar Nova Paleta
        </button>
      </div>

      {/* Controles Deslizantes */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Sliders className="h-6 w-6 mr-2 text-blue-500" />
          Ajustes da Paleta
        </h2>

        <div className="space-y-6">
          {/* Variação de Matiz */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Variação de Matiz
            </label>
            <Slider
              value={[hueShift]}
              onValueChange={handleHueShiftChange}
              max={360}
              step={1}
            />
          </div>

          {/* Saturação */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Saturação
            </label>
            <Slider
              value={[saturation]}
              onValueChange={handleSaturationChange}
              max={200}
              step={1}
            />
          </div>

          {/* Brilho */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brilho
            </label>
            <Slider
              value={[brightness]}
              onValueChange={handleBrightnessChange}
              min={-100}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}