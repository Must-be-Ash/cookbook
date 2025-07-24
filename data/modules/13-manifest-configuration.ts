import type { Module } from "../types/cookbook-types"

export const manifestConfigurationModule: Module = {
  id: "13-manifest-configuration",
  title: "13. Manifest Configuration",
  description: "Create Farcaster manifest and register your MiniKit app",
  estimatedTime: "2 min",
  videoUrl: "https://screen.studio/share/bv5FbEf7",
  content: {
    introduction: "Now let's create the Farcaster manifest file and register your MiniKit app to ensure it works properly in the Farcaster ecosystem.",
    sections: [
      {
        id: "create-farcaster-manifest",
        title: "13.1. Create Farcaster Manifest",
        content: "The `public/.well-known/farcaster.json` file will be based on your `app/.well-known/farcaster.json/route.ts` configuration.",
        instructions: [
          {
            type: "code",
            content: "{\n  \"accountAssociation\": {\n    \"header\": \"base64-encoded-header\",\n    \"payload\": \"base64-encoded-payload\",\n    \"signature\": \"cryptographic-signature\"\n  },\n  \"frame\": {\n    \"version\": \"next\",\n    \"name\": \"Shapes\",\n    \"subtitle\": \"make your mark\",\n    \"description\": \"generative art unique to your wallet\",\n    \"iconUrl\": \"https://your-domain.com/icon.png\",\n    \"splashImageUrl\": \"https://your-domain.com/splash.png\",\n    \"splashBackgroundColor\": \"#000000\",\n    \"homeUrl\": \"https://your-domain.com\",\n    \"primaryCategory\": \"art-creativity\"\n  }\n}",
            language: "json",
            copyable: true
          }
        ]
      },
      {
        id: "generate-manifest-signature",
        title: "13.2. Generate Manifest Signature",
        content: "To validate and register your app:",
        instructions: [
          {
            type: "subheader",
            content: "1. Test with Embed Tool"
          },
          {
            type: "text",
            content: "Go to Farcaster and use the Embed Tool to check that everything is working correctly."
          },
          {
            type: "link",
            content: "https://farcaster.xyz/~/developers",
            text: "farcaster.xyz/~/developers"
          },
          {
            type: "subheader",
            content: "2. Register with Manifests"
          },
          {
            type: "text",
            content: "Use the Manifests tool to register your app and verify all configurations."
          },
          {
            type: "text",
            content: "Both the Manifests and Embed Tool will flag any issues if your app is not ready for production."
          }
        ]
      }
    ],
    keyTakeaways: [
      "The Farcaster manifest defines your app configuration",
      "Use 'art-creativity' as the primary category for Shapes",
      "Account association requires proper cryptographic signatures",
      "Test with Farcaster's Embed Tool before going live",
      "Register with Manifests tool to validate configuration"
    ]
  }
} 