"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language?: string
  copyable?: boolean
}

export function CodeBlock({ code, language = "javascript", copyable = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!copyable) return

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <div className="relative group">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-gray-300 text-sm font-mono">{language}</span>
          {copyable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          )}
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-gray-100 font-mono text-sm leading-relaxed">{code}</code>
        </pre>
      </div>
    </div>
  )
}
