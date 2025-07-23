"use client"

import { AppProvider } from "@/components/providers/AppProvider"
import { AppLayout } from "@/components/layout/AppLayout"

export default function Home() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  )
}
