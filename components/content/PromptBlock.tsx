"use client"

import { useState } from "react"
import { MessageSquare, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromptBlockProps {
  prompt: string
  copyable?: boolean
}

export function PromptBlock({ prompt, copyable = true }: PromptBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!copyable) return

    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy prompt:", err)
    }
  }

  return (
    <div className="relative group">
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg overflow-hidden border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between px-4 py-2 bg-blue-100 dark:bg-blue-900/40 border-b border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-300 text-sm font-medium">AI Prompt</span>
          </div>
          {copyable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-200 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-800"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          )}
        </div>
        <div className="p-4">
          <p className="text-blue-900 dark:text-blue-100 leading-relaxed">{prompt}</p>
        </div>
      </div>
    </div>
  )
}
