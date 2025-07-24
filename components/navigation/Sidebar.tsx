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
          
          {/* Commands Link */}
          <div className="pt-4 border-t border-border mt-4">
            <button
              className="group w-full p-4 h-auto justify-start text-left bg-transparent hover:bg-surface-elevated rounded-lg transition-colors"
              onClick={() => window.open('/commands.md', '_blank')}
            >
              <div className="flex items-start gap-3 w-full">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 truncate text-text-primary group-hover:text-white">Commands</h3>
                  <p className="text-xs text-text-secondary group-hover:text-[#E5E7EB]">Reference guide for common commands</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}