import type { Module } from "../types/cookbook-types"

export const buildingShapeGeneratorModule: Module = {
  id: "05-building-shape-generator",
  title: "5. Building the Shape Generator Component",
  description: "Create the main shape generator component using Claude Code",
  estimatedTime: "5 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/FQJiRsVy-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155213Z&X-Amz-Expires=7200&X-Amz-Signature=234f6cad7e8394640446194634a4b177d554f6789d01a2a29b841876354a5466&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Now let's build the core component of our application - the Shape Generator that creates unique artwork based on wallet addresses.",
    sections: [
      {
        id: "create-shape-generator",
        title: "5.1. Create the Shape Generator Component",
        content: "Let's use Claude Code to create our main shape generator. In your Claude Code session:",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Create a React component called ShapeGenerator that:\n1. Takes a wallet address as a prop\n2. Uses HTML5 Canvas to generate deterministic artwork\n3. Creates geometric shapes with gradients based on the wallet address\n4. Has a clean, modern UI with glass morphism effects\n5. Shows a preview of the generated artwork",
            copyable: true
          }
        ]
      },
      {
        id: "update-main-page",
        title: "5.2. Update the Main Page",
        content: "Replace the content in `app/page.tsx`:",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Update the main page to:\n1. Include MiniKit integration with useMiniKit hook\n2. Add wallet connection functionality\n3. Display the ShapeGenerator component when wallet is connected\n4. Show connection prompt when wallet is not connected\n5. Use proper MiniKit lifecycle management",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "Use Claude Code prompts to create complex React components",
      "The ShapeGenerator component handles canvas-based art generation",
      "Wallet connection state determines what UI to show",
      "MiniKit integration requires proper lifecycle management",
      "Glass morphism effects enhance the modern UI design"
    ]
  }
} 