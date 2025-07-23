import type { Module } from "../types/cookbook-types"

export const buildingShapeGeneratorModule: Module = {
  id: "05-building-shape-generator",
  title: "5. Building the Shape Generator Component",
  description: "Create the main shape generator component using Claude Code",
  estimatedTime: "20 min",
  videoUrl: "/videos/05-building-shape-generator.mp4",
  content: {
    introduction: "Now let's build the core component of our application - the Shape Generator that creates unique artwork based on wallet addresses.",
    sections: [
      {
        id: "create-shape-generator",
        title: "5.1. Create the Shape Generator Component",
        content: "Let's use Claude Code to create our main shape generator. In your Claude Code session:",
        instructions: [
          {
            type: "text",
            content: "**Prompt to use:**"
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
            type: "text",
            content: "**Prompt to use:**"
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