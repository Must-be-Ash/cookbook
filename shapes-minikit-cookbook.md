# Building a Shapes MiniKit App: Step-by-Step Tutorial

A complete guide to building a generative art MiniKit application that creates unique artwork based on wallet addresses.

## 1. Introduction

### What You'll Build
In this tutorial, you'll create "Shapes" - a MiniKit application that generates unique, deterministic artwork based on wallet addresses. Users can connect their wallets and generate personalized generative art that's consistent and shareable.

### What You'll Learn
- Setting up a MiniKit development environment
- Using Claude Code for AI-assisted development
- Building with Next.js 15 and TypeScript
- Integrating OnchainKit for wallet functionality
- Creating deterministic generative art
- Deploying MiniKit applications

### Prerequisites
- Basic knowledge of React and TypeScript
- Node.js 18+ installed
- A Coinbase Developer Platform account
- A Vercel account (for deployment)

---

## 2. Prerequisites

> **Note**: If you already have Node.js, Cursor IDE, and Claude Code installed, you can skip to the next step.

Before we start building, you'll need to install three essential tools. Follow the links below to download and install each one:

### 2.1. Install Node.js

Node.js is required to run our Next.js application and manage packages.

**Download**: [https://nodejs.org/en](https://nodejs.org/en)

Download and install the latest LTS version. After installation, verify it's working:

```bash
node --version
npm --version
```

### 2.2. Install Cursor IDE

Cursor is an AI-powered code editor that will make development much easier.

**Download**: [https://cursor.com/](https://cursor.com/)

Download and install Cursor for your operating system. This will be your main development environment.

### 2.3. Install Claude Code

Claude Code will be your AI development assistant throughout this tutorial.

**Documentation**: [https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview)

Install Claude Code globally via npm:

```bash
# Install Claude Code globally
npm install -g @anthropic/claude-code

# Verify installation
claude --version
```

### 2.4. Get Your Coinbase Developer Platform API Key

You'll need a Client API Key from the Coinbase Developer Platform to use OnchainKit.

**Get your API key**: [https://portal.cdp.coinbase.com/products/onchainkit](https://portal.cdp.coinbase.com/products/onchainkit)

1. Sign up or log in to the Coinbase Developer Platform
2. Navigate to **Base Tools** in the sidebar
3. Look for **Client API Key** (not other API keys)
4. Copy your Client API Key - you'll need this in the next step

### 2.5. Set Up Your Development Directory

Create a new directory for your project:

```bash
mkdir shapes-tutorial
cd shapes-tutorial
```

---

## 3. Project Initialization

### 3.1. Create MiniKit Template

Initialize a new MiniKit project using the OnchainKit CLI:

```bash
npx create-onchain --mini
```

You'll be prompted to:
1. **Enter your app's name**: Type your desired app name (e.g., "shapes-app")
2. **Paste your Client API Key**: Enter the API key you copied from the Coinbase Developer Platform
3. **Share anonymous usage data to help improve create-onchain?**: Choose "no" or "yes" based on your preference

This will create your MiniKit project with all the necessary files and configuration!

### 3.2. Navigate and Install Dependencies

```bash
cd shapes-app
npm install
```

### 3.3. Start Development Server

```bash
npm run dev
```

Your MiniKit template should now be running at `http://localhost:3000`.

---

## 4. Start Claude

### 4.1. Initialize Claude Code in Your Project

From your project root directory, start an interactive session:

```bash
# Start an interactive session
claude
```

Then type `/init` and press enter. This will have Claude read your codebase and automatically create a `CLAUDE.md` file with project-specific guidance.

---

## 5. Building the Shape Generator Component

### 5.1. Create the Shape Generator Component

Let's use Claude Code to create our main shape generator. In your Claude Code session:

**Prompt to use:**
```
Create a React component called ShapeGenerator that:
1. Takes a wallet address as a prop
2. Uses HTML5 Canvas to generate deterministic artwork
3. Creates geometric shapes with gradients based on the wallet address
4. Has a clean, modern UI with glass morphism effects
5. Shows a preview of the generated artwork
```

### 5.2. Update the Main Page

Replace the content in `app/page.tsx`:

**Prompt to use:**
```
Update the main page to:
1. Include MiniKit integration with useMiniKit hook
2. Add wallet connection functionality
3. Display the ShapeGenerator component when wallet is connected
4. Show connection prompt when wallet is not connected
5. Use proper MiniKit lifecycle management
```

---

## 6. Wallet Integration

### 6.1. Configure MiniKit Provider

Update `app/providers.tsx` to ensure proper MiniKit configuration:

**Code to verify/update:**
```tsx
<MiniKitProvider
  notificationProxyUrl="/api/notify"
  apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
  chain={base}
>
  {children}
</MiniKitProvider>
```

### 6.2. Implement Wallet Connection Flow

**Prompt to use:**
```
Implement wallet connection functionality that:
1. Uses wagmi hooks for wallet management
2. Handles connection states (connecting, connected, disconnected)
3. Shows appropriate UI for each state
4. Integrates with MiniKit context
5. Displays wallet address when connected
```

---

## 7. Generative Art Algorithm

### 7.1. Create Deterministic Art Generation

**Prompt to use:**
```
Create a function that generates deterministic artwork from a wallet address:
1. Use the wallet address as a seed for randomization
2. Generate 5-8 geometric shapes (circles, rectangles, triangles)
3. Create gradient colors based on the address
4. Position shapes using deterministic algorithms
5. Ensure the same address always generates the same artwork
6. Use HTML5 Canvas for rendering
```

### 7.2. Add Canvas Utilities

**Prompt to use:**
```
Create utility functions for canvas operations:
1. Function to clear canvas
2. Function to generate colors from hex values
3. Function to create gradients
4. Function to draw different geometric shapes
5. Function to save canvas as image data
```

---

## 8. Styling and UI Polish

### 8.1. Update Theme Configuration

Ensure your `app/theme.css` includes proper CSS variables:

```css
:root {
  --ock-bg-default: #000000;
  --ock-bg-default-hover: #111111;
  --ock-bg-default-active: #222222;
}
```

### 8.2. Add Responsive Design

**Prompt to use:**
```
Make the app fully responsive:
1. Optimize layout for mobile devices
2. Adjust canvas size based on screen size
3. Ensure touch interactions work properly
4. Add proper spacing and padding
5. Test on different screen sizes
```

---

## 9. MiniKit Frame Integration

### 9.1. Configure Frame Metadata

Update `app/layout.tsx` with proper frame metadata, favicons, and the `fc:miniapp` meta tag. Notice we use hardcoded URLs:

**Tip**: You can convert PNG images to favicon format using: [https://favicon.io/favicon-converter/](https://favicon.io/favicon-converter/)

**Code to check/update:**
```tsx
export async function generateMetadata(): Promise<Metadata> {
  const projectName = "Shapes";
  
  return {
    title: projectName,
    description: "Generate unique wallet-based art using your address as a seed for deterministic creativity",
    keywords: [
      "Shapes",
      "Generative Art",
      "Wallet Art",
      "Blockchain",
      "NFT",
      "Digital Art",
      "Deterministic",
    ],
    authors: [{ name: "Shapes Team" }],
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png' },
        { url: '/icon.png' },
      ],
      other: [
        { 
          rel: 'android-chrome',
          url: '/android-chrome-192x192.png',
          sizes: '192x192'
        },
        { 
          rel: 'android-chrome',
          url: '/android-chrome-512x512.png',
          sizes: '512x512'
        },
      ],
    },
    manifest: '/site.webmanifest',
    openGraph: {
      title: `${projectName} | Generate Unique Wallet Art`,
      description: "Generate unique wallet-based art using your address as a seed for deterministic creativity",
      url: "https://your-domain.vercel.app/",
      siteName: projectName,
      type: "website",
      images: [
        {
          url: "https://your-domain.vercel.app/hero.png",
          width: 1200,
          height: 630,
          alt: `${projectName} - Generate Unique Wallet Art`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectName} | Generate Unique Wallet Art`,
      description: "Generate unique wallet-based art using your address as a seed for deterministic creativity",
      images: ["https://your-domain.vercel.app/hero.png"],
    },
    metadataBase: new URL("https://your-domain.vercel.app/"),
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: "https://your-domain.vercel.app/hero.png",
        button: {
          title: `Launch ${projectName}`,
          action: {
            type: "launch_frame",
            name: projectName,
            url: "https://your-domain.vercel.app/",
            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,
            splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
          },
        },
      }),
    },
  };
}

// Add this in the <head> section
<meta
  name="fc:miniapp"
  content={JSON.stringify({
    version: "1",
    imageUrl: "https://your-domain.vercel.app/hero.png",
    button: {
      title: "Open Shapes",
      action: {
        type: "launch_frame",
        url: "https://your-domain.vercel.app/",
        name: "Shapes"
      }
    }
  })}
/>
```

### 9.2. Create the Farcaster Manifest

Create `public/.well-known/farcaster.json` with your app configuration:

**Prompt to use:**
```
Create a public/.well-known/farcaster.json file with the following structure:
- Use "next" as the version
- Make sure ogTitle is short
- Keep tagline under 30 characters
- Keep ogDescription and description under 50 characters
- Include all required fields for a MiniKit app
- Use "art-creativity" as the primaryCategory
- Replace URLs with your actual domain
```

### 9.3. Set Up Frame Lifecycle

**Prompt to use:**
```
Implement proper MiniKit frame lifecycle:
1. Use useMiniKit hook to manage frame state
2. Call setFrameReady() when app is initialized
3. Handle frame context properly
4. Add error handling for frame operations
5. Ensure proper cleanup
```

---

## 10. Testing and Debugging

### 10.1. Get Your App Ready for Base App

Before testing, ensure your MiniKit app follows all best practices and debug any build issues:

#### Step 1: Build and Validate
First, run a production build to catch any errors:

```bash
npm run build
```

#### Step 2: Validate with Base App Guidelines
Go to this link and copy the entire text to your AI agent in Cursor IDE:

**Validation Guide**: [https://raw.githubusercontent.com/base/demos/refs/heads/master/minikit/mini-app-help/validate.txt](https://raw.githubusercontent.com/base/demos/refs/heads/master/minikit/mini-app-help/validate.txt)

This will help validate your app structure and ensure it meets all Base App requirements.

#### Step 3: Debug Build Issues (If Any)
If you encounter build errors, follow this debugging process:

**A. Ask AI to Fix It**
Share the error message with your AI agent and ask it to fix the issue.

**B. Comprehensive Code Audit**
If the problem persists, ask AI to:
```
Review all related files and study them completely without jumping to conclusions or assuming you have found the issue before completing a comprehensive audit of all related files. Add console logs to pin point the problem.
```

After adding console logs, test again and share the console output with your AI agent along with screenshots to help it debug.

**C. Use Context7 MCP for Farcaster Documentation**
If the problem still persists, ask AI to:
```
Use Context7 MCP to study Farcaster Docs about MiniApps and understand the problem and form a solution keeping in mind all the previous attempts at a solution that didn't work.
```

**Additional Debugging Tips**: [https://www.vibebook.xyz/tips-and-tricks](https://www.vibebook.xyz/tips-and-tricks)

### 10.2. Local Testing

Test your application locally:

```bash
# Start development server
npm run dev

# Test wallet connection
# Generate artwork with different addresses
# Check responsive design
```

### 10.3. Debug Common Issues

**Common issues and solutions:**
- Canvas not rendering: Check canvas size and context
- Wallet not connecting: Verify API keys and provider configuration
- Frame not loading: Check MiniKit setup and metadata
- Styling issues: Verify Tailwind classes and CSS variables

---

## 11. Deployment Preparation

### 11.1. Set Up Git Repository

**A. Configure .gitignore**
Ask your AI agent to ensure your `.gitignore` file is properly configured:

**Prompt to use:**
```
Make sure my .gitignore file is set up correctly and includes my env files and node_modules directory.
```

**B. Create Private GitHub Repository**
Go to [https://github.com/new](https://github.com/new) and:
1. Enter your repository name under "Repository name"
2. Select "Private" 
3. Press the green "Create Repository" button

**C. Push Your Code to GitHub**
After creating the repository, you'll see two command blocks. Use both:

First, run the commands from "…or create a new repository on the command line":
```bash
echo "# your-repo-name" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

Then run:
```bash
git add .
git commit -m " First commit "
git push origin main
```

---

## 12. Vercel Deployment

### 12.1. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_ONCHAINKIT_API_KEY
vercel env add NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME
vercel env add NEXT_PUBLIC_URL
```

### 12.2. Environment Configuration

Now that you have your Vercel URL, set up your environment variables:

#### Generate Environment Configuration
Run this command to automatically populate your environment file:

```bash
npx create-onchain --manifest
```

This will set up your `.env.local` file automatically. Just make sure your `NEXT_PUBLIC_ONCHAINKIT_API_KEY` is properly set.

#### Update Production Environment Variables
Set the environment variables in your Vercel dashboard:

```bash
# Set environment variables in Vercel
vercel env add NEXT_PUBLIC_ONCHAINKIT_API_KEY
vercel env add NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME
vercel env add NEXT_PUBLIC_URL
vercel env add NEXT_PUBLIC_SPLASH_IMAGE
vercel env add NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR
```

#### Final Steps
1. Update `NEXT_PUBLIC_URL` to your production domain
2. Verify all environment variables are set
3. Test the deployed application
4. Check frame functionality in Farcaster

---

## 13. Manifest Configuration

### 13.1. Create Farcaster Manifest

The `public/.well-known/farcaster.json` file will be based on your `app/.well-known/farcaster.json/route.ts` configuration.

```json
{
  "accountAssociation": {
    "header": "base64-encoded-header",
    "payload": "base64-encoded-payload",
    "signature": "cryptographic-signature"
  },
  "frame": {
    "version": "next",
    "name": "Shapes",
    "subtitle": "make your mark",
    "description": "generative art unique to your wallet",
    "iconUrl": "https://your-domain.com/icon.png",
    "splashImageUrl": "https://your-domain.com/splash.png",
    "splashBackgroundColor": "#000000",
    "homeUrl": "https://your-domain.com",
    "primaryCategory": "art-creativity"
  }
}
```

### 13.2. Generate Manifest Signature

To validate and register your app:

1. **Test with Embed Tool**: Go to [https://farcaster.xyz/~/developers](https://farcaster.xyz/~/developers) and use the **Embed Tool** to check that everything is working correctly

2. **Register with Manifests**: Use the **Manifests** tool to register your app and verify all configurations

Both the Manifests and Embed Tool will flag any issues if your app is not ready for production.

---

## 14. Final Testing and Launch

### 14.1. Comprehensive Testing

Test your complete application:

- [ ] Wallet connection works
- [ ] Art generation is deterministic
- [ ] Responsive design functions properly
- [ ] Frame loads in Farcaster
- [ ] All environment variables are configured
- [ ] Production build works

### 14.2. Launch Checklist

- [ ] Domain is properly configured
- [ ] Manifest is accessible and valid
- [ ] All assets (icons, splash images) are uploaded
- [ ] Environment variables are set in production
- [ ] Application is fully tested

---

## 15. Next Steps and Extensions

### Potential Enhancements

1. **Social Sharing**: Add sharing functionality for generated artwork
2. **Monetization and NFT Integration**: Add ability to mint artwork as NFTs for a given price
3. **Gallery**: Create a gallery of all generated artworks

### Learning Resources

- [MiniKit Documentation](https://docs.base.org/base-app/build-with-minikit/overview)
- [OnchainKit Documentation](https://docs.base.org/onchainkit/getting-started)
- [Farcaster Miniapp Documentation](https://miniapps.farcaster.xyz/)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

## Conclusion

Congratulations! You've successfully built a complete MiniKit application that generates unique artwork based on wallet addresses. You've learned how to integrate wallet functionality, create deterministic generative art, and deploy a MiniKit application to production.

Your Shapes app demonstrates the power of combining blockchain technology with creative applications, providing users with personalized, shareable digital art that's uniquely theirs.