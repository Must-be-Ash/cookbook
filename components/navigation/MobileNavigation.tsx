"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { cookbookModules } from "@/data/cookbook-content"
import { ModuleItem } from "./ModuleItem"
import { ProgressIndicator } from "./ProgressIndicator"
import { useApp } from "@/components/providers/AppProvider"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { completedModules, currentModule } = useApp()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Navigation Header */}
      <div className="flex items-center justify-between p-4 bg-surface border-b border-border">
        <div className="flex-1">
          <h2 className="font-semibold text-text-primary text-sm">
            {currentModule?.title || "Select Module"}
          </h2>
          <p className="text-xs text-text-secondary">
            {completedModules.size}/{cookbookModules.length} completed
          </p>
        </div>
        <button
          onClick={toggleMenu}
          className="p-2 hover:bg-surface-elevated rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-text-primary" />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-surface border-b border-border shadow-lg max-h-[70vh] overflow-y-auto">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <h1 className="text-xl font-bold text-text-primary mb-1">MiniKit Cookbook</h1>
            <p className="text-text-secondary text-xs mb-3">Learn to build MiniKit applications step-by-step</p>
            <ProgressIndicator completed={completedModules.size} total={cookbookModules.length} />
          </div>

          {/* Module List */}
          <div className="p-3">
            <div className="space-y-1">
              {cookbookModules.map((module) => (
                <div key={module.id} onClick={() => setIsOpen(false)}>
                  <ModuleItem 
                    module={module} 
                    isCompleted={completedModules.has(module.id)} 
                  />
                </div>
              ))}
              
              {/* Commands Link */}
              <div className="pt-3 border-t border-border mt-3">
                <button
                  className="group w-full p-3 h-auto justify-start text-left bg-transparent hover:bg-surface-elevated rounded-lg transition-colors"
                  onClick={() => {
                    window.open('/commands.md', '_blank')
                    setIsOpen(false)
                  }}
                >
                  <div className="flex items-start gap-3 w-full">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
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
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}