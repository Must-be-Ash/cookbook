"use client"

import { ExternalLink } from "lucide-react"

interface LinkBlockProps {
  url: string
  text: string
}

export function LinkBlock({ url, text }: LinkBlockProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
    >
      <span>{text}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  )
}
