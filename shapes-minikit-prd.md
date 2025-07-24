# Shapes MiniKit - Product Requirements Document

## Project Overview

**Project Name:** Shapes MiniKit
**Product Type:** Farcaster Mini App for Generative Art
**Technology Stack:** Next.js 15.3.3, MiniKit SDK, OnchainKit, Base Chain
**Domain:** Blockchain-based generative art platform

## Executive Summary

Shapes is a deterministic generative art application built as a Farcaster Mini App that creates unique, wallet-address-based artwork. Each Ethereum wallet address generates a consistent, reproducible art piece using algorithmic patterns. The application integrates seamlessly with the Farcaster ecosystem, allowing users to connect wallets, generate personalized art, and share their creations within the social network.

## Product Goals

### Primary Objectives
- **Deterministic Art Generation**: Create unique artwork that consistently generates the same output for any given wallet address
- **Farcaster Integration**: Provide native Mini App experience within Farcaster clients with frame lifecycle management
- **Social Sharing**: Enable seamless sharing of generated artwork within the Farcaster social network
- **Wallet Connectivity**: Leverage Base chain integration for Web3 authentication and identity

### Success Metrics
- User engagement through art generation and sharing
- Frame addition and notification system adoption
- Social virality through cast sharing
- Wallet connection conversion rates

## Technical Architecture

### Core Framework Stack

#### Frontend Framework
- **Next.js 15.3.3** with App Router architecture
- **TypeScript** with strict configuration for type safety
- **Tailwind CSS** with custom theme variables for consistent UI
- **React 18** with modern hooks and Suspense patterns

#### Blockchain Integration
- **OnchainKit** for Base chain connectivity and wallet management
- **wagmi 2.14.11** for Ethereum wallet interactions
- **viem 2.27.2** for low-level blockchain operations
- **Base L2** as primary blockchain network

#### MiniKit Framework
- **@farcaster/miniapp-sdk 0.1.7** for Mini App functionality
- **@farcaster/frame-sdk 0.0.60** for frame lifecycle management
- **MiniKitProvider** wrapper for global SDK context
- Frame manifest configuration for discovery and verification

#### Additional Libraries
- **@tanstack/react-query 5** for state management and data fetching
- **@upstash/redis 1.34.4** for notification persistence and rate limiting
- **canvas 3.1.2** for server-side image generation
- **@vercel/og 0.8.2** for dynamic Open Graph image creation

### Project Structure

#### Directory Architecture
```
app/
├── api/                    # API Routes
│   ├── artwork-png/        # PNG artwork generation endpoint
│   ├── download/           # Download preparation and delivery
│   │   ├── prepare/        # Download preparation endpoint
│   │   └── [id]/          # Download retrieval by ID
│   ├── notify/            # Frame notification proxy
│   ├── webhook/           # Farcaster lifecycle webhook
│   └── og-*/              # Open Graph image generation
├── components/            # React Components
│   ├── ShapeGenerator.tsx  # Core generative art component
│   ├── GlassCard.tsx      # UI component library
│   └── DemoComponents.tsx # Additional UI elements
├── share/[address]/       # Public sharing pages
├── providers.tsx          # MiniKit and OnchainKit configuration
├── layout.tsx            # Root layout with frame metadata
├── page.tsx              # Main application entry point
├── theme.css             # CSS custom properties
└── globals.css           # Global styles

lib/
├── notification-client.ts # Notification token management
├── download-storage.ts   # Download temporary storage
└── redis.ts              # Redis client configuration

public/
└── .well-known/
    └── farcaster.json    # Required Mini App manifest
```

## Core Features

### 1. Deterministic Art Generation

#### Algorithm Design
- **Address-based seeding**: Uses wallet address as deterministic seed for reproducible artwork
- **10 unique patterns**: Different art styles based on first character after "0x" in address
- **Seeded random number generation**: Custom PRNG ensures identical output for same address
- **High-resolution output**: Generates 1080x1080 pixel artwork for quality downloads

#### Art Style Variations
1. **Wave Interference Patterns** (0, A-C): Contour lines from wave source interference
2. **ASCII Water Flow** (1, D-E): Flowing character patterns with opacity variations
3. **Binary Erosion** (2, F-H): Block erosion patterns with crack propagation
4. **Ripple Networks** (3, I-J): Still point ripples with interference
5. **Kaleidoscope Mandala** (4, K-M): Radial symmetry with polar coordinate mapping
6. **Spiral Wave Fields** (5, N-O): Sparse contour lines from spiral wave sources
7. **ASCII Diagonal Patterns** (6, P-R): Character-based directional flows
8. **Density Blob Variations** (7, S-T): ASCII character density gradients
9. **Braille Interference** (8, U-W): Complex Unicode character wave patterns
10. **Horizontal Bar Noise** (9, X-Z): Linear patterns with noise-based positioning

### 2. Wallet Integration

#### Connection Management
- **OnchainKit wallet components** for seamless Web3 connectivity
- **Automatic Base chain switching** for optimal user experience
- **Identity display** showing ENS names, addresses, and ETH balances
- **Disconnect functionality** with persistent session management

#### Authentication Flow
- Connect wallet through MiniKit-provided connector
- Automatic art generation upon successful connection
- Address validation and normalization
- Support for external wallet injection

### 3. MiniKit Framework Integration

#### Frame Lifecycle Management
```typescript
// Core initialization pattern
const { setFrameReady, isFrameReady, context } = useMiniKit();

useEffect(() => {
  if (!isFrameReady) {
    setFrameReady(); // Remove splash screen
  }
}, [isFrameReady, setFrameReady]);
```

#### Essential Hooks Implementation
- **`useMiniKit()`**: Frame context and initialization
- **`useAddFrame()`**: Frame installation with notification token generation
- **`useComposeCast()`**: Social sharing with embedded frame URLs
- **`useOpenUrl()`**: External URL navigation with fallback handling
- **`useNotification()`**: Push notification delivery to frame users

#### Context Access
- **User identification**: Access to Farcaster ID and username
- **Frame status**: Whether user has added frame to their list
- **Client capabilities**: Available SDK features and permissions

### 4. Sharing and Social Features

#### Cast Composition
- **Dynamic sharing URLs**: Personalized `/share/[address]` pages with unique OG images
- **Embed generation**: Frame-compatible URLs for in-line cast display
- **Text templates**: Pre-composed sharing messages for user engagement

#### Public Gallery System
- **Address-based galleries**: Public viewing pages for any wallet's artwork
- **Open Graph optimization**: Dynamic OG images showing actual generated art
- **SEO-friendly URLs**: Clean, shareable links for social media

### 5. Download System

#### High-Quality Export
- **PNG generation**: Full-resolution 1080x1080 image export
- **Temporary storage**: 5-minute expiration download preparation system
- **Multiple download methods**: 
  - Farcaster SDK `openUrl` for Mini App environments
  - Traditional browser download for web clients
  - Clipboard fallback for restricted environments

#### Download Flow
1. User generates artwork in 1080x1080 canvas
2. Download preparation creates temporary storage entry
3. Unique download ID generated with expiration
4. SDK-aware routing determines download method
5. Automatic cleanup of expired temporary files

### 6. Notification System

#### Architecture
- **Redis-based storage**: Persistent notification tokens and user preferences
- **Rate limiting**: 30-second minimum between notifications per user
- **CORS proxy**: `/api/notify` endpoint handles cross-origin notification delivery
- **Webhook integration**: Frame lifecycle events through Farcaster key registry

#### Notification Flow
1. User adds frame via `useAddFrame()` → receives token + URL
2. Token stored in Redis with user association
3. Application sends notifications via `useNotification()`
4. Backend proxies to Farcaster notification service
5. Rate limiting prevents notification spam

## API Endpoints

### Core API Routes

#### `/api/artwork-png`
- **Purpose**: Server-side PNG generation for sharing and downloads
- **Method**: GET with `address` query parameter
- **Technology**: Node.js Canvas with identical algorithms to client-side generation
- **Output**: High-quality PNG with caching headers
- **Use Cases**: Open Graph images, external sharing, backup generation

#### `/api/download/prepare` (POST)
- **Purpose**: Prepare artwork for download with temporary storage
- **Input**: `{ address, imageData }` JSON payload
- **Process**: Generates UUID, stores data with 5-minute expiration
- **Output**: `{ downloadId }` for retrieval
- **Security**: Automatic cleanup prevents storage bloat

#### `/api/download/[id]` (GET)
- **Purpose**: Retrieve prepared download by ID
- **Validation**: Checks expiration and data integrity
- **Headers**: Proper content-disposition for file download
- **Cleanup**: Removes data after successful retrieval

#### `/api/notify` (POST)
- **Purpose**: CORS proxy for Farcaster notification delivery
- **Function**: Forwards notifications to Farcaster service
- **Authentication**: Validates notification tokens
- **Rate Limiting**: Prevents spam and abuse

#### `/api/webhook` (POST)
- **Purpose**: Handle Farcaster frame lifecycle events
- **Events**: frame_added, frame_removed, notifications_enabled, notifications_disabled
- **Validation**: Cryptographic signature verification via key registry
- **Processing**: Updates user state and notification preferences

#### `/api/og-*` Routes
- **Purpose**: Dynamic Open Graph image generation
- **Technology**: Vercel OG with @vercel/og
- **Variants**: Different layouts for various sharing contexts
- **Caching**: Optimized for social media preview performance

### `/share/[address]` Pages
- **Purpose**: Public gallery for wallet-based artwork
- **SEO**: Dynamic metadata with artwork-specific descriptions
- **OG Integration**: Calls `/api/og-artwork` for social previews
- **Responsive**: Mobile-optimized viewing experience

## Environment Configuration

### Required Environment Variables

#### OnchainKit Configuration
```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_coinbase_developer_platform_api_key
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=shapes
```

#### Application Configuration
```bash
NEXT_PUBLIC_URL=https://your-domain.com
NEXT_PUBLIC_BASE_URL=https://your-domain.com  # Used for sharing URLs
```

#### Redis Configuration (for notifications)
```bash
REDIS_URL=your_upstash_redis_url
REDIS_TOKEN=your_upstash_redis_token
```

#### Frame Branding
```bash
NEXT_PUBLIC_SPLASH_IMAGE=https://your-domain.com/splash.png
NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=#000000
```

### Deployment Configuration

#### Vercel Deployment (Recommended)
- **Build Command**: `npm run build`
- **Environment Variables**: Set via Vercel dashboard or CLI
- **Domain Configuration**: Custom domain with HTTPS required
- **Function Configuration**: Edge-optimized for global performance

#### Required Static Assets
- `/icon.png` (200x200px) - Mini App icon
- `/splash.png` - Splash screen image
- `/hero.png` - Hero image for Open Graph
- `/screenshot.png` - App store/discovery screenshot

## Mini App Manifest Configuration

### `.well-known/farcaster.json`
```json
{
  "accountAssociation": {
    "header": "base64-encoded-header",
    "payload": "base64-encoded-payload", 
    "signature": "cryptographic-signature"
  },
  "frame": {
    "version": "next",
    "name": "shapes",
    "subtitle": "make your mark",
    "description": "generative art unique to your wallet",
    "iconUrl": "https://app.com/icon.png",
    "splashImageUrl": "https://app.com/splash.png",
    "splashBackgroundColor": "#000000",
    "homeUrl": "https://app.com",
    "heroImageUrl": "https://app.com/hero.png",
    "tagline": "make your mark",
    "primaryCategory": "art-creativity",
    "screenshotUrls": ["https://app.com/screenshot.png"],
    "ogTitle": "shapes",
    "ogDescription": "generative art unique to your wallet",
    "ogImageUrl": "https://app.com/hero.png",
    "webhookUrl": "https://app.com/api/webhook"
  }
}
```

#### Key Manifest Requirements
- **Account Association**: Cryptographic proof of domain ownership
- **Primary Category**: "art-creativity" for proper discovery placement
- **Image Assets**: All URLs must be HTTPS with proper dimensions
- **Webhook URL**: Optional but recommended for lifecycle event handling

## User Experience Flow

### First-Time User Journey
1. **Discovery**: User finds app through Farcaster search or shared cast
2. **Frame Load**: Splash screen shows while MiniKit initializes
3. **Connection Prompt**: Clean interface requests wallet connection
4. **Automatic Generation**: Art generates immediately upon wallet connection
5. **Share/Save Options**: User can share to cast or download PNG
6. **Frame Addition**: Optional frame installation for notifications

### Returning User Journey
1. **Instant Recognition**: Same artwork generates for returning wallet
2. **Quick Actions**: Immediate access to share and download
3. **Social Features**: Enhanced sharing with personalized URLs
4. **Notification Engagement**: Push notifications for app updates

### Shared Content Viewing
1. **Public Access**: Anyone can view shared artwork via `/share/[address]` URLs
2. **OG Preview**: Rich previews in social media with actual artwork
3. **Discovery Path**: Public galleries can lead to new user conversion

## Technical Implementation Details

### Canvas Rendering System

#### Client-Side Generation
- **HTML5 Canvas**: 1080x1080 resolution for high-quality output
- **Real-time Rendering**: Immediate visual feedback during generation
- **Responsive Display**: Scaled presentation while maintaining quality
- **Performance Optimization**: Efficient rendering algorithms

#### Server-Side Generation
- **Node.js Canvas**: Identical algorithms for consistency
- **API Endpoint**: `/api/artwork-png` for external requests
- **Caching Strategy**: HTTP cache headers for repeated requests
- **Error Handling**: Graceful fallbacks for generation failures

### Deterministic Algorithm Design

#### Address Processing
```typescript
// Hash wallet address to numeric seed
function hashAddress(address: string): number {
  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    const char = address.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Map first character to pattern (0-9)
function getExampleNumber(address: string): number {
  const firstChar = address.charAt(2).toLowerCase();
  // Numeric: return as-is
  // Letters: map to groups 0-9
}
```

#### Seeded Random Generation
```typescript
class SeededRandom {
  private seed: number;
  
  constructor(seed: number) {
    this.seed = seed;
  }
  
  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
  
  // Additional methods for integers and floats
}
```

### Theme System

#### CSS Custom Properties
```css
/* theme.css */
:root {
  --app-background: #ffffff;
  --app-foreground: #333333;
  --app-accent: #0066cc;
  --glass-border: rgba(255, 255, 255, 0.2);
  /* Additional theme variables */
}
```

#### Glass Morphism UI
- **Consistent design language** across all components
- **Responsive typography** with system font stacks
- **Accessibility compliance** with proper contrast ratios
- **Dark mode preparation** through CSS custom properties

## Security Considerations

### Input Validation
- **Address verification**: Ethereum address format validation
- **Parameter sanitization**: All user inputs properly escaped
- **Rate limiting**: API endpoints protected against abuse
- **CORS configuration**: Proper cross-origin resource sharing

### Data Handling
- **No persistent user data**: Stateless operation with temporary storage only
- **Secure token management**: Notification tokens properly encrypted
- **Download security**: Time-limited access with automatic cleanup
- **Webhook verification**: Cryptographic signature validation

### Frame Security
- **Manifest validation**: Proper account association verification
- **Domain verification**: HTTPS requirements enforced
- **Content security**: No user-generated content stored permanently

## Development and Testing

### Local Development Setup
```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Fill in required API keys and URLs

# Start development server
npm run dev
```

### Testing Strategy
- **Manual testing**: Cross-browser and mobile device testing
- **Frame testing**: Farcaster debug tools and embed preview
- **API testing**: Endpoint validation and error handling
- **Performance testing**: Canvas rendering and image generation speed

### Deployment Process
1. **Environment setup**: Configure all required variables
2. **Asset preparation**: Upload all required images and icons
3. **Domain configuration**: HTTPS setup with proper DNS
4. **Manifest deployment**: Ensure `.well-known/farcaster.json` is accessible
5. **Discovery testing**: Verify app appears in Farcaster search

## Performance Optimization

### Rendering Performance
- **Canvas optimization**: Efficient drawing algorithms
- **Memory management**: Proper cleanup of canvas contexts
- **Lazy loading**: Components loaded on demand
- **Image optimization**: Compressed static assets

### API Performance
- **HTTP caching**: Appropriate cache headers for static content
- **Redis optimization**: Efficient data structures for notifications
- **Edge deployment**: Vercel edge functions for global performance
- **Bundle optimization**: Tree shaking and code splitting

## Future Enhancement Opportunities

### Feature Expansions
- **Custom color palettes**: User-selectable themes
- **Animation modes**: Time-based generative art variations
- **Collection systems**: Gallery creation for multiple addresses
- **NFT integration**: Minting generated artwork on-chain

### Technical Improvements
- **WebGL rendering**: GPU-accelerated generation for complex patterns
- **Progressive generation**: Streaming artwork creation
- **Advanced sharing**: Video export and animated previews
- **Analytics integration**: User behavior tracking and optimization

This PRD provides a comprehensive technical specification for recreating the Shapes MiniKit application, covering all architectural decisions, implementation details, and deployment requirements necessary for faithful reproduction of the existing system.