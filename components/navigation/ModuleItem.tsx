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
  const isAvailable = true // All modules are now available

  const handleClick = () => {
    if (isAvailable) {
      setCurrentModule(module)
    }
  }

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={`group w-full p-4 h-auto justify-start text-left ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleClick}
      disabled={!isAvailable}
    >
      <div className="flex items-start gap-3 w-full">
        <div className="flex-shrink-0 mt-1">
          {isCompleted ? (
            <CheckCircle className={`w-5 h-5 ${isActive ? "!text-green-400" : "text-success group-hover:!text-green-400"}`} />
          ) : isAvailable ? (
            <PlayCircle className={`w-5 h-5 ${isActive ? "!text-white" : "text-primary group-hover:!text-white"}`} />
          ) : (
            <Clock className={`w-5 h-5 ${isActive ? "!text-[#D1D5DB]" : "text-text-muted group-hover:!text-[#D1D5DB]"}`} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-sm mb-1 truncate ${isActive ? "!text-white" : "group-hover:!text-white"}`}>{module.title}</h3>
          <p className={`text-xs mb-2 line-clamp-2 ${isActive ? "!text-[#E5E7EB]" : "text-text-secondary group-hover:!text-[#E5E7EB]"}`}>{module.description}</p>
          <div className={`flex items-center gap-2 text-xs ${isActive ? "!text-[#D1D5DB]" : "text-text-muted group-hover:!text-[#D1D5DB]"}`}>
            <Clock className={`w-3 h-3 ${isActive ? "!text-[#D1D5DB]" : "text-text-muted group-hover:!text-[#D1D5DB]"}`} />
            <span>{module.estimatedTime}</span>
          </div>
        </div>
      </div>
    </Button>
  )
}
