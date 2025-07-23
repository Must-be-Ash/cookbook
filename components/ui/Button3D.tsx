"use client"

import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface Button3DProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success"
  size?: "sm" | "md" | "lg"
  isPressed?: boolean
}

const Button3D = forwardRef<HTMLButtonElement, Button3DProps>(
  ({ className, variant = "primary", size = "md", isPressed = false, children, ...props }, ref) => {
    
    // Base styles for the button
    const baseStyles = "relative font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
    
    // Color variants - dark by default, blue when hovered/pressed
    const variantColors = {
      primary: "bg-[#444444] hover:bg-[#0052FF] text-white focus:ring-[#0052FF]/50",
      secondary: "bg-[#444444] hover:bg-[#0052FF] text-white focus:ring-[#0052FF]/50", 
      success: "bg-[#444444] hover:bg-[#0052FF] text-white focus:ring-[#0052FF]/50"
    }
    
    // Apply blue color when button is pressed (marked complete)
    const pressedColorOverride = isPressed ? "!bg-[#0052FF]" : ""
    
    // Size variants
    const sizeStyles = {
      sm: "px-4 py-2 text-sm rounded-lg",
      md: "px-6 py-3 text-base rounded-xl", 
      lg: "px-8 py-4 text-lg rounded-2xl"
    }

    // 3D effect styles based on state
    const stateStyles = isPressed 
      ? "transform translate-y-2 scale-95 shadow-none" // Pressed: down, smaller, no shadow
      : "transform translate-y-0 scale-100 shadow-[0_8px_0_0_rgba(0,0,0,0.2)] hover:translate-y-2 hover:scale-95 hover:shadow-none" // Hovering: elevated with shadow, moves down on hover

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantColors[variant],
          sizeStyles[size],
          stateStyles,
          pressedColorOverride,
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    )
  }
)

Button3D.displayName = "Button3D"

export { Button3D } 