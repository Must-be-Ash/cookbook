/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        // White background theme
        background: "#ffffff",
        foreground: "#0f172a",
        
        // Primary blue accent
        primary: {
          DEFAULT: "#0052ff",
          foreground: "#ffffff",
          hover: "#0041cc",
          light: "#3374ff",
        },
        
        // Secondary green for terminal text
        secondary: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
          hover: "#059669",
        },
        
        // Surface colors
        surface: "#f8fafc",
        "surface-elevated": "#ffffff",
        
        // Border colors
        border: "#e2e8f0",
        "border-light": "#f1f5f9",
        
        // Text colors with proper contrast
        "text-primary": "#0f172a",
        "text-secondary": "#475569", 
        "text-muted": "#64748b",
        
        // Status colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#0052ff",
        
        // Shadcn/ui compatibility
        input: "#e2e8f0",
        ring: "#0052ff",
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#0052ff",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}