"use client"

import { cookbookModules } from "@/data/cookbook-content"
import { ModuleItem } from "./ModuleItem"
import { ProgressIndicator } from "./ProgressIndicator"
import { useApp } from "@/components/providers/AppProvider"

export function Sidebar() {
  const { completedModules } = useApp()

  return (
    <div className="h-full bg-surface border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-text-primary mb-2">MiniKit Cookbook</h1>
        <p className="text-text-secondary text-sm">Learn to build MiniKit applications step-by-step</p>
        <ProgressIndicator completed={completedModules.size} total={cookbookModules.length} />
      </div>

      {/* Module List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {cookbookModules.map((module) => (
            <ModuleItem key={module.id} module={module} isCompleted={completedModules.has(module.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}
