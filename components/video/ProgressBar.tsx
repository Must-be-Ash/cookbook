"use client"

import type React from "react"

interface ProgressBarProps {
  currentTime: number
  duration: number
  onSeek: (time: number) => void
}

export function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    onSeek(newTime)
  }

  return (
    <div className="w-full h-2 bg-white/30 rounded-full cursor-pointer" onClick={handleClick}>
      <div className="h-full bg-primary rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}
