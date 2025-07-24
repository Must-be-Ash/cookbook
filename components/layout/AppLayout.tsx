"use client"

import { VideoPlayer } from "@/components/video/VideoPlayer"
import { ModuleContent } from "@/components/content/ModuleContent"
import { Sidebar } from "@/components/navigation/Sidebar"
import { MobileNavigation } from "@/components/navigation/MobileNavigation"
import { useApp } from "@/components/providers/AppProvider"
import { useIsMobile } from "@/hooks/use-mobile"

export function AppLayout() {
  const { currentModule } = useApp()
  const isMobile = useIsMobile()

  if (!currentModule) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Welcome to Cookbook</h1>
          <p className="text-text-secondary">Loading your MiniKit development journey...</p>
        </div>
      </div>
    )
  }

  if (isMobile) {
    // Mobile Layout
    return (
      <div className="h-screen flex flex-col bg-background">
        {/* Mobile Navigation - Fixed at top */}
        <div className="relative z-50">
          <MobileNavigation />
        </div>

        {/* Main Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {/* Video Player */}
          <div className="p-4">
            <VideoPlayer />
          </div>

          {/* Module Content */}
          <div className="px-4 pb-8">
            <ModuleContent />
          </div>
        </div>
      </div>
    )
  }

  // Desktop Layout (unchanged)
  return (
    <div className="h-screen flex bg-background">
      {/* Main Content Area - Scrollable with sticky video */}
      <div className="flex-1 overflow-y-auto">
        {/* Video Player - Sticky at top */}
        <div className="sticky top-0 z-10 bg-background px-8 pt-6 pb-0">
          <div className="max-w-3xl ml-12">
            <VideoPlayer />
          </div>
        </div>

        {/* Module Content */}
        <div className="px-8 pb-8">
          <div className="max-w-5xl mx-auto">
            <ModuleContent />
          </div>
        </div>
      </div>

      {/* Sidebar - Exact width, no responsive variations */}
      <div className="w-96 flex-shrink-0 border-l border-border bg-surface">
        <Sidebar />
      </div>
    </div>
  )
}