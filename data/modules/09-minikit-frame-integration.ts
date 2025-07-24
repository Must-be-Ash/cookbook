import type { Module } from "../types/cookbook-types"

export const minikitFrameIntegrationModule: Module = {
  id: "09-minikit-frame-integration",
  title: "9. MiniKit Frame Integration",
  description: "Configure frame metadata and implement proper MiniKit lifecycle",
  estimatedTime: "12 min",
  videoUrl: "/videos/09-minikit-frame-integration.mp4",
  content: {
    introduction: "Now let's configure proper frame metadata and implement MiniKit lifecycle management to ensure your app works correctly in the Farcaster ecosystem.",
    sections: [
      {
        id: "configure-frame-metadata",
        title: "9.1. Configure Frame Metadata",
        content: "Update `app/layout.tsx` with proper frame metadata, favicons, and the `fc:miniapp` meta tag. Notice we use hardcoded URLs:",
        instructions: [
          {
            type: "text",
            content: "Tip: You can convert PNG images to favicon format using favicon.io:"
          },
          {
            type: "link",
            content: "https://favicon.io/favicon-converter/",
            text: "favicon.io"
          },
          {
            type: "subheader",
            content: "Code to check/update:"
          },
          {
            type: "code",
            content: "export async function generateMetadata(): Promise<Metadata> {\n  const projectName = \"Shapes\";\n  \n  return {\n    title: projectName,\n    description: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\n    keywords: [\n      \"Shapes\",\n      \"Generative Art\",\n      \"Wallet Art\",\n      \"Blockchain\",\n      \"NFT\",\n      \"Digital Art\",\n      \"Deterministic\",\n    ],\n    authors: [{ name: \"Shapes Team\" }],\n    icons: {\n      icon: [\n        { url: '/favicon.ico' },\n        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },\n        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },\n        { url: '/icon.png', sizes: '192x192', type: 'image/png' },\n      ],\n      apple: [\n        { url: '/apple-touch-icon.png' },\n        { url: '/icon.png' },\n      ],\n      other: [\n        { \n          rel: 'android-chrome',\n          url: '/android-chrome-192x192.png',\n          sizes: '192x192'\n        },\n        { \n          rel: 'android-chrome',\n          url: '/android-chrome-512x512.png',\n          sizes: '512x512'\n        },\n      ],\n    },\n    manifest: '/site.webmanifest',\n    openGraph: {\n      title: `${projectName} | Generate Unique Wallet Art`,\n      description: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\n      url: \"https://your-domain.vercel.app/\",\n      siteName: projectName,\n      type: \"website\",\n      images: [\n        {\n          url: \"https://your-domain.vercel.app/hero.png\",\n          width: 1200,\n          height: 630,\n          alt: `${projectName} - Generate Unique Wallet Art`,\n        },\n      ],\n      locale: \"en_US\",\n    },\n    twitter: {\n      card: \"summary_large_image\",\n      title: `${projectName} | Generate Unique Wallet Art`,\n      description: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\n      images: [\"https://your-domain.vercel.app/hero.png\"],\n    },\n    metadataBase: new URL(\"https://your-domain.vercel.app/\"),\n    other: {\n      \"fc:frame\": JSON.stringify({\n        version: \"next\",\n        imageUrl: \"https://your-domain.vercel.app/hero.png\",\n        button: {\n          title: `Launch ${projectName}`,\n          action: {\n            type: \"launch_frame\",\n            name: projectName,\n            url: \"https://your-domain.vercel.app/\",\n            splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE,\n            splashBackgroundColor: process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,\n          },\n        },\n      }),\n    },\n  };\n}\n\n// Add this in the <head> section\n<meta\n  name=\"fc:miniapp\"\n  content={JSON.stringify({\n    version: \"1\",\n    imageUrl: \"https://your-domain.vercel.app/hero.png\",\n    button: {\n      title: \"Open Shapes\",\n      action: {\n        type: \"launch_frame\",\n        url: \"https://your-domain.vercel.app/\",\n        name: \"Shapes\"\n      }\n    }\n  })}\n/>",
            language: "tsx",
            copyable: true
          }
        ]
      },
      {
        id: "create-farcaster-manifest",
        title: "9.2. Create the Farcaster Manifest",
        content: "Create `public/.well-known/farcaster.json` with your app configuration:",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Create a public/.well-known/farcaster.json file with the following structure:\n- Use \"next\" as the version\n- Make sure ogTitle is short\n- Keep tagline under 30 characters\n- Keep ogDescription and description under 50 characters\n- Include all required fields for a MiniKit app\n- Use \"art-creativity\" as the primaryCategory\n- Replace URLs with your actual domain",
            copyable: true
          }
        ]
      },
      {
        id: "setup-frame-lifecycle",
        title: "9.3. Set Up Frame Lifecycle",
        content: "",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Implement proper MiniKit frame lifecycle:\n1. Use useMiniKit hook to manage frame state\n2. Call setFrameReady() when app is initialized\n3. Handle frame context properly\n4. Add error handling for frame operations\n5. Ensure proper cleanup",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "Frame metadata is essential for proper Farcaster integration",
      "Use hardcoded URLs in metadata for consistency",
      "The fc:miniapp meta tag is required for MiniKit apps",
      "Farcaster manifest file defines app configuration",
      "Proper lifecycle management ensures smooth frame operation"
    ]
  }
} 