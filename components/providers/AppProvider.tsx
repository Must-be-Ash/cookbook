"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Module } from "@/data/types/cookbook-types"
import { cookbookModules } from "@/data/cookbook-content"

interface AppContextType {
  currentModule: Module | null
  setCurrentModule: (module: Module) => void
  completedModules: Set<string>
  markModuleComplete: (moduleId: string) => void
  currentTime: number
  setCurrentTime: (time: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentModule, setCurrentModule] = useState<Module | null>(
    cookbookModules.find((m) => m.id === "01-introduction") || null,
  )
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set())
  const [currentTime, setCurrentTime] = useState(0)

  const markModuleComplete = (moduleId: string) => {
    setCompletedModules((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId)
      } else {
        newSet.add(moduleId)
      }
      return newSet
    })
  }

  return (
    <AppContext.Provider
      value={{
        currentModule,
        setCurrentModule,
        completedModules,
        markModuleComplete,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
