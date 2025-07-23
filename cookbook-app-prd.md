# Cookbook - Video-Based MiniKit Tutorial App

## Project Overview

### App Details
- **App Name**: Cookbook
- **URL**: cookbook.cam
- **Purpose**: A video-based cookbook for teaching developers how to build MiniKit applications step-by-step

### Purpose
Build a Next.js application that serves as a comprehensive video tutorial platform for building a "Shapes" MiniKit application. The app features 15 structured learning modules with video lessons, synchronized text content, copyable code snippets, and a comprehensive navigation system.

### Scope
- Single-page application (SPA)
- No authentication required
- No database (static content)
- Video-based learning interface with 15 tutorial modules
- Step-by-step tutorial navigation
- Code snippet management with copy functionality
- AI prompts and terminal commands with one-click copy

---

## Technical Requirements

### Stack
- **Framework**: Next.js with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS
- **Video Player**: HTML5 video with custom controls
- **Deployment**: Vercel (static export)


---

## Application Architecture

### File Structure
```
app/
├── page.tsx                 # Main application page
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx           # Main app layout wrapper
│   │   └── ResponsiveContainer.tsx # Responsive container
│   ├── video/
│   │   ├── VideoPlayer.tsx         # Main video player component
│   │   ├── VideoControls.tsx       # Custom video controls
│   │   └── ProgressBar.tsx         # Video progress bar
│   ├── navigation/
│   │   ├── Sidebar.tsx             # Main sidebar navigation
│   │   ├── ModuleItem.tsx          # Individual module component
│   │   └── ProgressIndicator.tsx   # Progress tracking
│   ├── content/
│   │   ├── ModuleContent.tsx       # Main content area
│   │   ├── CodeBlock.tsx           # Copyable code snippets
│   │   ├── TerminalCommand.tsx     # Terminal command blocks
│   │   ├── PromptBlock.tsx         # Claude prompts
│   │   └──LinkBlock.tsx           # External links
│   ├── ui/
│   │   ├── Button.tsx              # Reusable button component
│   │   ├── CopyButton.tsx          # Copy to clipboard button
│   │   ├── Icon.tsx                # Icon component
│   │   └── Tooltip.tsx             # Tooltip component
│   └── providers/
│       └── AppProvider.tsx         # App state management
├── hooks/
│   ├── useVideoPlayer.ts           # Video player state management
│   ├── useNavigation.ts            # Navigation state management
│   ├── useModuleContent.ts         # Dynamic module loading
│   ├── useCopyToClipboard.ts       # Copy functionality
│   └── useLocalStorage.ts          # Local storage persistence
├── data/
│   ├── cookbook-content.ts         # Main index file with metadata
│   ├── modules/
│   │   ├── 02-prerequisites.ts     # Example module (implement this one)
│   │   └── [other modules]         # We'll add the remaining 14 modules later
│   └── types/
│       └── cookbook-types.ts       # Shared type definitions
└── utils/
    ├── video.ts                    # Video utility functions
    └── navigation.ts               # Navigation helpers
```

**Note for Engineers**: You only need to implement the Prerequisites module (`02-prerequisites.ts`) as shown in the example below. We will add the remaining 14 modules ourselves later.

---

## Core Components Specification

### 1. AppLayout Component
**File**: `components/layout/AppLayout.tsx`

**Purpose**: Main layout wrapper that organizes the video player and sidebar

**Props**:
```typescript
interface AppLayoutProps {
  children: React.ReactNode;
  currentStep: string;
  onStepChange: (stepId: string) => void;
}
```

**Features**:
- Responsive layout (side-by-side on desktop, stacked on mobile)
- Handles viewport resizing
- Manages layout state

---

### 2. VideoPlayer Component
**File**: `components/video/VideoPlayer.tsx`

**Purpose**: Main video player with custom controls

**Props**:
```typescript
interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onVideoEnd?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
}
```

**Features**:
- HTML5 video with custom controls
- Full-screen support
- Progress tracking
- Auto-play next video option


---

### 3. Sidebar Component
**File**: `components/navigation/Sidebar.tsx`

**Purpose**: Navigation sidebar with collapsible chapters and progress tracking

**Props**:
```typescript
interface SidebarProps {
  chapters: Chapter[];
  currentStepId: string;
  onStepSelect: (stepId: string) => void;
  completedSteps: string[];
}
```

**Features**:
- Collapsible chapter sections
- Progress indicators (checkmarks)
- Smooth scrolling to active step
- Search/filter functionality
- Progress percentage display

---

### 4. StepContent Component
**File**: `components/content/StepContent.tsx`

**Purpose**: Displays step content with text, code blocks, and instructions

**Props**:
```typescript
interface StepContentProps {
  step: Step;
  onNextStep: () => void;
  onPreviousStep: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}
```

**Features**:
- Markdown-like text rendering
- Integration with code blocks
- Navigation buttons
- Progress indicators
- Responsive design

---

### 5. CodeBlock Component
**File**: `components/content/CodeBlock.tsx`

**Purpose**: Syntax-highlighted code blocks with copy functionality

**Props**:
```typescript
interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  copyable?: boolean;
  showLineNumbers?: boolean;
}
```

**Features**:
- Syntax highlighting (using Prism.js or similar)
- One-click copy to clipboard
- Copy success feedback
- Line numbers
- Multiple language support

---

### 6. TerminalCommand Component
**File**: `components/content/TerminalCommand.tsx`

**Purpose**: Specialized component for terminal/bash commands

**Props**:
```typescript
interface TerminalCommandProps {
  command: string;
  description?: string;
  multiline?: boolean;
}
```

**Features**:
- Terminal-style styling
- Copy button
- Command description tooltip
- Multi-line command support

---

### 7. PromptBlock Component
**File**: `components/content/PromptBlock.tsx`

**Purpose**: Special styling for Claude AI prompts

**Props**:
```typescript
interface PromptBlockProps {
  prompt: string;
  title?: string;
  context?: string;
}
```

**Features**:
- Distinctive styling for AI prompts
- Copy functionality
- Context information
- Clear visual differentiation

---

## Data Structure

### Content Data Schema (data/types/cookbook-types.ts)
```typescript
export interface Cookbook {
  id: string;
  title: string;
  description: string;
  totalDuration: number; // in minutes
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  estimatedTime: number; // in minutes
  videoUrl: string;
  content: ModuleContent;
}

export interface ModuleContent {
  introduction: string;
  sections: ContentSection[];
  keyTakeaways: string[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  instructions: ContentBlock[];
}

export interface ContentBlock {
  type: 'text' | 'code' | 'terminal' | 'prompt' | 'callout' | 'link' | 'list';
  content: string | string[]; // string[] for lists
  language?: string; // for code blocks
  title?: string;
  copyable?: boolean;
}


// Specific content block types for better type safety
export interface CodeBlock extends ContentBlock {
  type: 'code';
  content: string;
  language: string;
  copyable: true;
}

export interface TerminalCommand extends ContentBlock {
  type: 'terminal';
  content: string;
  copyable: true;
}

export interface PromptBlock extends ContentBlock {
  type: 'prompt';
  content: string;
  copyable: true;
}
```

---

## State Management

### Application State
```typescript
interface AppState {
  currentChapterId: string;
  currentStepId: string;
  completedSteps: string[];
  videoState: VideoState;
  sidebarCollapsed: boolean;
  preferences: UserPreferences;
}

interface VideoState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isFullscreen: boolean;
}

interface UserPreferences {
  autoPlayNext: boolean;
  playbackSpeed: number;
}
```

### State Persistence
- Use `localStorage` to persist user progress
- Save completed steps and preferences
- Restore state on app load

---

## Custom Hooks

### 1. useVideoPlayer Hook
**File**: `hooks/useVideoPlayer.ts`

**Purpose**: Manages video player state and controls

```typescript
interface UseVideoPlayerReturn {
  videoRef: RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  play: () => void;
  pause: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  setPlaybackRate: (rate: number) => void;
  toggleFullscreen: () => void;
}
```

### 2. useNavigation Hook
**File**: `hooks/useNavigation.ts`

**Purpose**: Manages step navigation and progress tracking

```typescript
interface UseNavigationReturn {
  currentStep: Step;
  currentChapter: Chapter;
  completedSteps: string[];
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToStep: (stepId: string) => void;
  nextStep: () => void;
  previousStep: () => void;
  markStepComplete: (stepId: string) => void;
  getProgressPercentage: () => number;
}
```

### 3. useCopyToClipboard Hook
**File**: `hooks/useCopyToClipboard.ts`

**Purpose**: Handles copy to clipboard functionality with feedback

```typescript
interface UseCopyToClipboardReturn {
  copyToClipboard: (text: string) => Promise<void>;
  isCopied: boolean;
  copyError: string | null;
}
```


---

## User Interface Requirements

### Layout Specifications

#### Desktop Layout (≥1024px)
- **Left Panel (70%)**: Video player and step content
- **Right Panel (30%)**: Navigation sidebar
- **Minimum sidebar width**: 320px
- **Maximum content width**: 1200px

#### Tablet Layout (768px - 1023px)
- **Top Section**: Video player (16:9 aspect ratio)
- **Bottom Section**: Tabbed interface (Content | Navigation)
- **Sidebar**: Collapsible overlay

#### Mobile Layout (<768px)
- **Stacked Layout**: Video → Content → Navigation
- **Navigation**: Bottom sheet or accordion
- **Video**: Full-width, responsive height

### Visual Design

#### Color Scheme (Cooking Show Theme)
```css
:root {
  /* Primary - Warm chef orange */
  --primary: #e67e22;
  --primary-hover: #d35400;
  --primary-light: #f39c12;
  
  /* Secondary - Kitchen sage green */
  --secondary: #27ae60;
  --secondary-hover: #229954;
  
  /* Backgrounds - Warm kitchen tones */
  --background: #fefdf8; /* Cream white */
  --surface: #f8f6f0; /* Warm off-white */
  --surface-elevated: #ffffff;
  
  /* Borders and dividers */
  --border: #e8e5db;
  --border-light: #f4f1e8;
  
  /* Text colors */
  --text-primary: #2c1810; /* Dark chocolate brown */
  --text-secondary: #8b4513; /* Saddle brown */
  --text-muted: #a0855b;
  
  /* Cooking-themed accent colors */
  --success: #27ae60; /* Fresh herb green */
  --warning: #f39c12; /* Golden turmeric */
  --error: #e74c3c; /* Paprika red */
  --info: #3498db; /* Sky blue */
  
  /* Kitchen equipment grays */
  --neutral-100: #f7f5f2;
  --neutral-200: #efebe4;
  --neutral-300: #ddd6c7;
  --neutral-400: #b8a994;
  --neutral-500: #8b7d6b;
  --neutral-600: #6b5b4a;
  --neutral-700: #4a3f35;
  --neutral-800: #2c1810;
  
  /* Recipe card shadows */
  --shadow-sm: 0 1px 2px 0 rgba(44, 24, 16, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(44, 24, 16, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(44, 24, 16, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode - Cozy kitchen evening */
    --background: #1a1612; /* Dark cocoa */
    --surface: #2c1f1a; /* Rich coffee brown */
    --surface-elevated: #3d2b24;
    
    --border: #4a3629;
    --border-light: #3d2b24;
    
    --text-primary: #f4f1e8; /* Warm cream */
    --text-secondary: #d4c4a8; /* Muted gold */
    --text-muted: #a08660;
    
    /* Adjusted for dark mode */
    --neutral-100: #3d2b24;
    --neutral-200: #4a3629;
    --neutral-300: #5c4035;
    --neutral-800: #f4f1e8;
  }
}
```

#### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weight
- **Code**: JetBrains Mono, monospace
- **Base size**: 16px
- **Scale**: 1.125 (Major Second)

#### Component Styling

**Sidebar Items**:
- Hover: Background change with smooth transition
- Active: Border accent and background highlight
- Completed: Checkmark icon with success color

**Code Blocks**:
- Dark theme with syntax highlighting
- Rounded corners (8px)
- Copy button in top-right corner
- Line numbers (optional)

**Navigation Buttons**:
- Primary button style for "Next"
- Secondary button style for "Previous"
- Disabled state when appropriate

---

## Accessibility Requirements

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through all interactive elements
- **Focus Indicators**: Clear visual focus states
- **Keyboard Shortcuts**: Global shortcuts with escape key override

### Screen Reader Support
- **ARIA Labels**: Proper labeling for all interactive elements
- **Semantic HTML**: Use appropriate HTML5 semantic elements
- **Live Regions**: Announce dynamic content changes

### Video Accessibility
- **Captions**: Support for video captions/subtitles
- **Audio Descriptions**: Support for audio descriptions
- **Transcript**: Text transcript for each video

---

## Content Management

### Content Structure
To avoid file bloat with 15 substantial modules, content is organized in separate files with a modular structure:

#### File Organization Structure
```
data/
├── cookbook-content.ts          # Main index file with metadata
├── modules/
│   ├── 01-introduction.ts       # Module 1 content
│   ├── 02-prerequisites.ts      # Module 2 content
│   ├── 03-project-init.ts       # Module 3 content
│   ├── 04-start-claude.ts       # Module 4 content
│   ├── 05-shape-generator.ts    # Module 5 content
│   ├── 06-wallet-integration.ts # Module 6 content
│   ├── 07-generative-art.ts     # Module 7 content
│   ├── 08-styling-ui.ts         # Module 8 content
│   ├── 09-minikit-frame.ts      # Module 9 content
│   ├── 10-testing-debugging.ts  # Module 10 content
│   ├── 11-deployment-prep.ts    # Module 11 content
│   ├── 12-vercel-deployment.ts  # Module 12 content
│   ├── 13-manifest-config.ts    # Module 13 content
│   ├── 14-final-testing.ts      # Module 14 content
│   └── 15-next-steps.ts         # Module 15 content
└── types/
    └── cookbook-types.ts        # Shared type definitions
```

#### Main Index File (data/cookbook-content.ts)
```typescript
import { introduction } from './modules/01-introduction';
import { prerequisites } from './modules/02-prerequisites';
import { projectInit } from './modules/03-project-init';
import { startClaude } from './modules/04-start-claude';
import { shapeGenerator } from './modules/05-shape-generator';
import { walletIntegration } from './modules/06-wallet-integration';
import { generativeArt } from './modules/07-generative-art';
import { stylingUI } from './modules/08-styling-ui';
import { minikitFrame } from './modules/09-minikit-frame';
import { testingDebugging } from './modules/10-testing-debugging';
import { deploymentPrep } from './modules/11-deployment-prep';
import { vercelDeployment } from './modules/12-vercel-deployment';
import { manifestConfig } from './modules/13-manifest-config';
import { finalTesting } from './modules/14-final-testing';
import { nextSteps } from './modules/15-next-steps';

export const cookbookData: Cookbook = {
  id: 'shapes-minikit-tutorial',
  title: 'Building a Shapes MiniKit App',
  description: 'Learn to build a generative art MiniKit application step-by-step',
  totalDuration: 270, // 4.5 hours in minutes
  modules: [
    introduction,
    prerequisites,
    projectInit,
    startClaude,
    shapeGenerator,
    walletIntegration,
    generativeArt,
    stylingUI,
    minikitFrame,
    testingDebugging,
    deploymentPrep,
    vercelDeployment,
    manifestConfig,
    finalTesting,
    nextSteps,
  ]
};
```

#### Individual Module File Example (data/modules/02-prerequisites.ts)
```typescript
import { Module } from '../types/cookbook-types';

export const prerequisites: Module = {
  id: 'prerequisites',
  title: '2. Prerequisites',
  description: 'Install Node.js, Cursor IDE, Claude Code, and get CDP API key',
  estimatedTime: 15,
  videoUrl: '/videos/02-prerequisites.mp4',
  content: {
    introduction: 'Before we start building, you\'ll need to install three essential tools...',
    sections: [
      {
        id: 'install-nodejs',
        title: '2.1. Install Node.js',
        content: 'Node.js is required to run our Next.js application and manage packages.',
        instructions: [
          {
            type: 'text',
            content: 'Download and install the latest LTS version from the link below:'
          },
          {
            type: 'link',
            content: 'https://nodejs.org/en',
            title: 'Download Node.js'
          },
          {
            type: 'terminal',
            content: 'node --version\nnpm --version',
            title: 'Verify installation'
          }
        ]
      },
      {
        id: 'install-cursor',
        title: '2.2. Install Cursor IDE',
        content: 'Cursor is an AI-powered code editor that will make development much easier.',
        instructions: [
          {
            type: 'text',
            content: 'Download and install Cursor for your operating system:'
          },
          {
            type: 'link',
            content: 'https://cursor.com/',
            title: 'Download Cursor IDE'
          }
        ]
      },
      {
        id: 'install-claude-code',
        title: '2.3. Install Claude Code',
        content: 'Claude Code will be your AI development assistant throughout this tutorial.',
        instructions: [
          {
            type: 'link',
            content: 'https://docs.anthropic.com/en/docs/claude-code/overview',
            title: 'Claude Code Documentation'
          },
          {
            type: 'terminal',
            content: '# Install Claude Code globally\nnpm install -g @anthropic/claude-code\n\n# Verify installation\nclaude --version',
            title: 'Install and verify Claude Code'
          }
        ]
      },
      {
        id: 'get-api-key',
        title: '2.4. Get Your Coinbase Developer Platform API Key',
        content: 'You\'ll need a Client API Key from the Coinbase Developer Platform to use OnchainKit.',
        instructions: [
          {
            type: 'text',
            content: 'Follow these steps to get your API key:'
          },
          {
            type: 'link',
            content: 'https://portal.cdp.coinbase.com/products/onchainkit',
            title: 'Get your API key'
          },
          {
            type: 'list',
            content: [
              'Sign up or log in to the Coinbase Developer Platform',
              'Navigate to **Base Tools** in the sidebar',
              'Look for **Client API Key** (not other API keys)',
              'Copy your Client API Key - you\'ll need this in the next step'
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      'Node.js 18+ is required for Next.js development',
      'Cursor IDE provides AI-powered development assistance',
      'Claude Code integrates with your development workflow',
      'The Client API Key is specifically found under Base Tools'
    ]
  }
};
```

### Complete Module Example (Prerequisites)

Here's the complete Prerequisites module that should be implemented in `data/modules/02-prerequisites.ts`:

```typescript
import { Module } from '../types/cookbook-types';

export const prerequisites: Module = {
  id: 'prerequisites',
  title: '2. Prerequisites',
  description: 'Install Node.js, Cursor IDE, Claude Code, and get CDP API key',
  estimatedTime: 15,
  videoUrl: '/videos/02-prerequisites.mp4',
  content: {
    introduction: 'If you already have Node.js, Cursor IDE, and Claude Code installed, you can skip to the next step. Before we start building, you\'ll need to install three essential tools. Follow the links below to download and install each one:',
    sections: [
      {
        id: 'install-nodejs',
        title: '2.1. Install Node.js',
        content: 'Node.js is required to run our Next.js application and manage packages.',
        instructions: [
          {
            type: 'link',
            content: 'https://nodejs.org/en',
            title: 'Download Node.js'
          },
          {
            type: 'text',
            content: 'Download and install the latest LTS version. After installation, verify it\'s working:'
          },
          {
            type: 'terminal',
            content: 'node --version\nnpm --version',
            title: 'Verify Node.js installation',
            copyable: true
          }
        ]
      },
      {
        id: 'install-cursor',
        title: '2.2. Install Cursor IDE',
        content: 'Cursor is an AI-powered code editor that will make development much easier.',
        instructions: [
          {
            type: 'link',
            content: 'https://cursor.com/',
            title: 'Download Cursor IDE'
          },
          {
            type: 'text',
            content: 'Download and install Cursor for your operating system. This will be your main development environment.'
          }
        ]
      },
      {
        id: 'install-claude-code',
        title: '2.3. Install Claude Code',
        content: 'Claude Code will be your AI development assistant throughout this tutorial.',
        instructions: [
          {
            type: 'link',
            content: 'https://docs.anthropic.com/en/docs/claude-code/overview',
            title: 'Claude Code Documentation'
          },
          {
            type: 'text',
            content: 'Install Claude Code globally via npm:'
          },
          {
            type: 'terminal',
            content: '# Install Claude Code globally\nnpm install -g @anthropic/claude-code\n\n# Verify installation\nclaude --version',
            title: 'Install Claude Code',
            copyable: true
          }
        ]
      },
      {
        id: 'get-api-key',
        title: '2.4. Get Your Coinbase Developer Platform API Key',
        content: 'You\'ll need a Client API Key from the Coinbase Developer Platform to use OnchainKit.',
        instructions: [
          {
            type: 'link',
            content: 'https://portal.cdp.coinbase.com/products/onchainkit',
            title: 'Get your API key'
          },
          {
            type: 'list',
            content: [
              'Sign up or log in to the Coinbase Developer Platform',
              'Navigate to **Base Tools** in the sidebar', 
              'Look for **Client API Key** (not other API keys)',
              'Copy your Client API Key - you\'ll need this in the next step'
            ]
          }
        ]
      },
      {
        id: 'setup-directory',
        title: '2.5. Set Up Your Development Directory',
        content: 'Create a new directory for your project:',
        instructions: [
          {
            type: 'terminal',
            content: 'mkdir shapes-tutorial\ncd shapes-tutorial',
            title: 'Create project directory',
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      'Node.js 18+ is required for Next.js development',
      'Cursor IDE provides AI-powered development assistance', 
      'Claude Code integrates with your development workflow',
      'The Client API Key is specifically found under Base Tools',
      'Set up a dedicated project directory before starting'
    ]
  }
};
```

#### Benefits of Modular Content Structure

**1. Maintainability**
- Each module is self-contained and easy to edit
- Clear separation of concerns
- Version control friendly (smaller diffs)

**2. Performance Optimization**
- Lazy loading: Only load content for current module
- Smaller initial bundle size
- Tree shaking eliminates unused modules

**3. Development Experience**
- Easy to find and update specific content
- TypeScript provides better intellisense for individual modules
- Parallel development on different modules

**4. Scalability**
- Easy to add new modules without touching existing ones
- Content can be easily reordered by changing import order
- Module-specific optimizations (compression, caching)

#### Dynamic Loading Implementation
```typescript
// hooks/useModuleContent.ts
export const useModuleContent = (moduleId: string) => {
  const [content, setContent] = useState<Module | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModule = async () => {
      try {
        setLoading(true);
        const module = await import(`../data/modules/${moduleId}.ts`);
        setContent(module.default);
      } catch (error) {
        console.error(`Failed to load module ${moduleId}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadModule();
  }, [moduleId]);

  return { content, loading };
};
```

### Video Assets
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (1080p)
- **Frame Rate**: 30fps
- **Bitrate**: 5-8 Mbps
- **Audio**: 128kbps AAC
- **Total Modules**: 15 tutorial modules covering complete MiniKit development
- **Naming**: Sequential numbering with descriptive names (01-introduction.mp4, 02-prerequisites.mp4, etc.)
- **Total Duration**: Approximately 4.5 hours of content

---

## Performance Requirements

### Loading Performance
- **Initial Load**: <3 seconds for first meaningful paint
- **Video Loading**: Progressive loading with placeholder
- **Code Highlighting**: Lazy-loaded syntax highlighting
- **Images**: WebP format with fallbacks

### Runtime Performance
- **Smooth Scrolling**: 60fps scroll performance
- **Video Playback**: No dropped frames during playback
- **Navigation**: <100ms response time for step changes
- **Copy Operations**: Immediate feedback (<50ms)

### Optimization Strategies
- **Code Splitting**: Dynamic imports for non-critical components
- **Video Preloading**: Preload next video when current is 80% complete
- **Bundle Size**: <500KB initial JavaScript bundle
- **Caching**: Aggressive caching for static assets

---

## Testing Requirements

### Unit Testing
- All custom hooks
- Utility functions
- Component logic (non-visual)

### Integration Testing
- Navigation flows
- Video player controls
- Copy to clipboard functionality
- Keyboard shortcuts

### E2E Testing
- Complete user journey through a chapter
- Video playback and controls
- Mobile responsive behavior
- Accessibility compliance

### Browser Testing
- Cross-browser compatibility
- Mobile device testing
- Performance testing

---

## Deployment Specification

### Build Configuration
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

### Static Export
- Generate static files for CDN deployment
- Pre-render all routes
- Optimize assets for production

### Vercel Deployment
- **Production URL**: cookbook.cam
- **App Name**: Cookbook
- Automatic deployment from main branch
- Preview deployments for pull requests
- Custom domain configuration (cookbook.cam)
- Performance monitoring
- CDN optimization for video assets

---

## Development Guidelines

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for linting

### Component Guidelines
1. **Single Responsibility**: Each component has one clear purpose
2. **TypeScript**: Full type coverage for props and state
3. **Error Boundaries**: Wrap components that may fail
4. **Loading States**: Handle loading and error states
5. **Accessibility**: Include ARIA labels and keyboard support

### Performance Guidelines
1. **React.memo**: Memoize components that don't need frequent re-renders
2. **useCallback/useMemo**: Optimize expensive calculations
3. **Lazy Loading**: Dynamic imports for heavy components
4. **Bundle Analysis**: Regular bundle size monitoring

---

## Future Enhancements

### Phase 2 Features
- **Search**: Global search across all content
- **Bookmarks**: Save favorite steps for quick access
- **Notes**: Personal notes on each step
- **Speed Control**: Variable playback speeds

### Phase 3 Features
- **Multiple Courses**: Support for multiple cookbook series
- **User Accounts**: Progress sync across devices
- **Interactive Coding**: In-browser code editor
- **Community**: Comments and discussions

### Technical Debt Considerations
- **Content Management**: Move to headless CMS for easier content updates
- **Video Streaming**: Implement adaptive bitrate streaming
- **Analytics**: Add usage analytics and performance monitoring
- **Internationalization**: Support for multiple languages

---

## Success Metrics

### User Engagement
- **Completion Rate**: Percentage of users completing all 15 modules
- **Module Completion**: Individual module completion rates (1-15)
- **Session Duration**: Average time spent per session (target: 30-45 minutes)
- **Drop-off Points**: Identify where users leave the tutorial
- **Return Visits**: User retention and module revisits

### Technical Performance
- **Page Load Time**: Average load time across all pages
- **Video Start Time**: Time to first video frame
- **Error Rate**: JavaScript errors and video playback failures
- **Mobile Usage**: Mobile vs desktop usage patterns

### Quality Metrics
- **Accessibility Score**: WCAG 2.1 AA compliance
- **Performance Score**: Lighthouse performance rating
- **Bundle Size**: JavaScript bundle size over time
- **User Feedback**: Qualitative feedback on user experience

This PRD provides a comprehensive foundation for building a professional video-based cookbook application with a focus on developer experience, performance, and maintainability.