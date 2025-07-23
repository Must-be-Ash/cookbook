"use client"

import type { ReactNode } from "react"

interface ResponsiveContainerProps {
  children: ReactNode
}

export function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  return <div className="w-full max-w-[1400px] mx-auto">{children}</div>
}
