import type { Module } from "../types/cookbook-types"

export const manifestConfigurationModule: Module = {
  id: "13-manifest-configuration",
  title: "13. Manifest Configuration",
  description: "Create Farcaster manifest and register your MiniKit app",
  estimatedTime: "2 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/bv5FbEf7-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155614Z&X-Amz-Expires=7200&X-Amz-Signature=a46cab94b24822cab9427c9bfc6f92009bac0035f82a3e1011cbee82553945d3&X-Amz-SignedHeaders=host&x-id=GetObject",
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