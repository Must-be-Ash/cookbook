"use client"

interface ProgressIndicatorProps {
  completed: number
  total: number
}

export function ProgressIndicator({ completed, total }: ProgressIndicatorProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0

  return (
    <div className="mt-4">
      <div className="flex justify-between text-xs text-text-secondary mb-2">
        <span>Progress</span>
        <span>
          {completed}/{total} modules
        </span>
      </div>
      <div className="w-full bg-border rounded-full h-2">
        <div className="bg-primary h-2 rounded-full transition-all duration-300" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
