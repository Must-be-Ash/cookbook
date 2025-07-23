"use client"

import { useState } from "react"
import { Terminal, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"

interface TerminalCommandProps {
  command: string
  copyable?: boolean
}

export function TerminalCommand({ command, copyable = true }: TerminalCommandProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!copyable) return

    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy command:", err)
    }
  }

  return (
    <div className="relative group">
      <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-gray-300 text-sm font-mono">Terminal</span>
          </div>
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
        <div className="p-4">
          <code className="text-green-400 font-mono text-sm">$ {command}</code>
        </div>
      </div>
    </div>
  )
}
