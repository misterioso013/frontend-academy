'use client'
import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"

export function ProgressCourse() {
    const [progress, setProgress] = React.useState(50)
    return(
        <div className="mb-6">
                <Progress value={progress} />
                <p className="text-sm text-gray-500">{progress}% Completo</p>
              </div>
    )
}