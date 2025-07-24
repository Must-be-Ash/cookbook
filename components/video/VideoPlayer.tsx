"use client"

import { useRef, useState, useEffect } from "react"
import { Play } from "lucide-react"
import { VideoControls } from "./VideoControls"
import { useApp } from "@/components/providers/AppProvider"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { currentModule, currentTime, setCurrentTime } = useApp()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Reset video state when module changes
    setIsPlaying(false)
    setDuration(0)
    setCurrentTime(0)

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      // Pause video when cleaning up to prevent ghost playback
      video.pause()
    }
  }, [currentModule?.id, setCurrentTime])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
  }

  const handleSeek = (time: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = time
  }

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current
    if (!video) return
    video.volume = newVolume
    setVolume(newVolume)
  }

  const toggleFullscreen = () => {
    const video = videoRef.current
    if (!video) return

    if (!isFullscreen) {
      video.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const isExternalVideo = currentModule?.videoUrl?.includes('screen.studio')
  
  return (
    <div className="relative w-full">
      {/* Professional video container with rounded corners and shadow */}
      <div className="relative bg-black rounded-xl shadow-2xl overflow-hidden border border-border">
        {/* Video element */}
        <div className="relative aspect-video">
          {isExternalVideo ? (
            <iframe
              src={currentModule?.videoUrl}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={currentModule?.videoUrl || "/placeholder-video.mp4"}
                preload="metadata"
              />
              
              {/* Gradient overlay for better control visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Center play button overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={togglePlay}
                    className="bg-white/70 backdrop-blur-sm hover:bg-white/50 transition-all duration-200 rounded-full p-6 pointer-events-auto group"
                  >
                    <Play className="w-12 h-12 text-[#0052FF] ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              )}
              
              {/* Professional video controls */}
              <VideoControls
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                volume={volume}
                onTogglePlay={togglePlay}
                onSeek={handleSeek}
                onVolumeChange={handleVolumeChange}
                onToggleFullscreen={toggleFullscreen}
              />
            </>
          )}
        </div>
      </div>
      
    </div>
  )
}