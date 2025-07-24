import type { Module } from "../types/cookbook-types"

export const minikitFrameIntegrationModule: Module = {
  id: "09-minikit-frame-integration",
  title: "9. MiniKit Frame Integration",
  description: "Configure frame metadata and implement proper MiniKit lifecycle",
  estimatedTime: "1 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/cKUvTfli-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155554Z&X-Amz-Expires=7200&X-Amz-Signature=358230adf8998b73ad6fb3911873ff203aeec399352effc346d668abeab907f4&X-Amz-SignedHeaders=host&x-id=GetObject",
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
            content: "import type React from \"react\";\nimport \"./globals.css\";\nimport \"./theme.css\";\nimport \"@coinbase/onchainkit/styles.css\";\nimport { Providers } from \"./providers\";\nimport type { Metadata, Viewport } from 'next';\n\nexport const viewport: Viewport = {\nwidth: \"device-width\",\ninitialScale: 1,\nthemeColor: \"#000000\",\n};\n\nexport const metadata: Metadata = {\ntitle: \"Shapes | Generate Unique Wallet Art\",\ndescription: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\nkeywords: [\n\"Shapes\",\n\"Generative Art\",\n\"Wallet Art\",\n\"Blockchain\",\n\"NFT\",\n\"Digital Art\",\n\"Deterministic\",\n],\nauthors: [{ name: \"Shapes Team\" }],\nicons: {\nicon: [\n{ url: '/favicon.ico' },\n{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },\n{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },\n{ url: '/icon.png', sizes: '192x192', type: 'image/png' },\n],\napple: [\n{ url: '/apple-touch-icon.png' },\n{ url: '/icon.png' },\n],\nother: [\n{\nrel: 'android-chrome',\nurl: '/android-chrome-192x192.png',\nsizes: '192x192'\n},\n{\nrel: 'android-chrome',\nurl: '/android-chrome-512x512.png',\nsizes: '512x512'\n},\n],\n},\nmanifest: '/site.webmanifest',\nopenGraph: {\ntitle: \"Shapes | Generate Unique Wallet Art\",\ndescription: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\nurl: \"https://your-domain.vercel.app/\",\nsiteName: \"Shapes\",\ntype: \"website\",\nimages: [\n{\nurl: \"https://your-domain.vercel.app/hero.png\",\nwidth: 1200,\nheight: 630,\nalt: \"Shapes - Generate Unique Wallet Art\",\n},\n],\nlocale: \"en_US\",\n},\ntwitter: {\ncard: \"summary_large_image\",\ntitle: \"Shapes | Generate Unique Wallet Art\",\ndescription: \"Generate unique wallet-based art using your address as a seed for deterministic creativity\",\nimages: [\"https://your-domain.vercel.app/hero.png\"],\n},\nmetadataBase: new URL(\"https://your-domain.vercel.app/\"),\n};\n\nexport default function RootLayout({\nchildren,\n}: Readonly<{\nchildren: React.ReactNode;\n}>) {\nreturn (\n<html lang=\"en\">\n<head>\n<meta\nname=\"fc:miniapp\"\ncontent='{\"version\":\"1\",\"imageUrl\":\"https://your-domain.vercel.app/hero.png\",\"button\":{\"title\":\"Open Shapes\",\"action\":{\"type\":\"launch_frame\",\"url\":\"https://your-domain.vercel.app/\",\"name\":\"Shapes\"}}}'\n/>\n</head>\n<body className=\"bg-background\">\n<Providers>{children}</Providers>\n</body>\n</html>\n);\n}",
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