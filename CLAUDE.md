# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application called "Cookbook" - a MiniKit development tutorial platform with video-based learning modules. The app provides structured learning content with progress tracking and interactive components.

## Architecture

- **Framework**: Next.js 15 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Comprehensive shadcn/ui component library with custom theme
- **State Management**: React Context via AppProvider component
- **Data Structure**: Module-based content system with video integration

### Key Directories

- `app/` - Next.js app router pages and layouts
- `components/` - Organized by feature (content, layout, navigation, providers, ui, video)
- `data/` - Content management system with modules and types
- `hooks/` - Custom React hooks
- `lib/` - Utilities (primarily utils.ts for cn function)
- `styles/` - Global CSS files

### Content Architecture

The application is built around a modular content system:
- **Modules**: Defined in `data/cookbook-content.ts` and individual module files
- **Types**: Centralized in `data/types/cookbook-types.ts`
- **Structure**: Each module contains introduction, sections, key takeaways, and video content

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Import Patterns

- Use `@/*` path aliases for all internal imports
- Components organized by feature area
- Consistent import structure: types, React, internal components, UI components

## Styling and Components

- **shadcn/ui**: Full component library configured with custom theme variables
- **Tailwind**: Extended configuration with custom colors and CSS variables
- **Theme System**: CSS variables for consistent theming across components
- **Component Structure**: Feature-based organization (content/, layout/, navigation/, etc.)

## Key Configuration Notes

- TypeScript strict mode enabled
- ESLint and TypeScript errors ignored during builds (development setup)
- Images configured as unoptimized
- Custom font setup with Inter and JetBrains Mono
- Path aliases configured for clean imports

## Video Integration

The app includes video player components with custom controls and progress tracking, designed for educational content delivery.