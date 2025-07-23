"use client"

import { CheckCircle, Clock, PlayCircle } from "lucide-react"
import type { Module } from "@/data/types/cookbook-types"
import { useApp } from "@/components/providers/AppProvider"
import { Button } from "@/components/ui/button"

interface ModuleItemProps {
  module: Module
  isCompleted: boolean
}

export function ModuleItem({ module, isCompleted }: ModuleItemProps) {
  const { currentModule, setCurrentModule } = useApp()
  const isActive = currentModule?.id === module.id
  const isAvailable = module.id === "02-prerequisites" // Only prerequisites is available for now

  const handleClick = () => {
    if (isAvailable) {
      setCurrentModule(module)
    }
  }

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`w-full p-4 h-auto justify-start text-left ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleClick}
      disabled={!isAvailable}
    >
      <div className="flex items-start gap-3 w-full">
        <div className="flex-shrink-0 mt-1">
          {isCompleted ? (
            <CheckCircle className="w-5 h-5 text-success" />
          ) : isAvailable ? (
            <PlayCircle className="w-5 h-5 text-primary" />
          ) : (
            <Clock className="w-5 h-5 text-text-muted" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm mb-1 truncate">{module.title}</h3>
          <p className="text-xs text-text-secondary mb-2 line-clamp-2">{module.description}</p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Clock className="w-3 h-3" />
            <span>{module.estimatedTime}</span>
          </div>
        </div>
      </div>
    </Button>
  )
}
