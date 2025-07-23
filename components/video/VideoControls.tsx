"use client"

import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"
import { ProgressBar } from "./ProgressBar"
import { Button } from "@/components/ui/button"

interface VideoControlsProps {
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  onTogglePlay: () => void
  onSeek: (time: number) => void
  onVolumeChange: (volume: number) => void
  onToggleFullscreen: () => void
}

export function VideoControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  onToggleFullscreen,
}: VideoControlsProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onTogglePlay} className="text-white hover:bg-white/20">
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>

        <div className="flex-1">
          <ProgressBar currentTime={currentTime} duration={duration} onSeek={onSeek} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-white text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onVolumeChange(volume > 0 ? 0 : 1)}
            className="text-white hover:bg-white/20"
          >
            {volume > 0 ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => onVolumeChange(Number.parseFloat(e.target.value))}
            className="w-16"
          />
        </div>

        <Button variant="ghost" size="sm" onClick={onToggleFullscreen} className="text-white hover:bg-white/20">
          <Maximize className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
