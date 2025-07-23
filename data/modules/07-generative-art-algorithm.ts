import type { Module } from "../types/cookbook-types"

export const generativeArtAlgorithmModule: Module = {
  id: "07-generative-art-algorithm",
  title: "7. Generative Art Algorithm",
  description: "Create deterministic art generation and canvas utilities",
  estimatedTime: "25 min",
  videoUrl: "/videos/07-generative-art-algorithm.mp4",
  content: {
    introduction: "Now let's implement the core algorithm that generates unique, deterministic artwork based on wallet addresses using HTML5 Canvas.",
    sections: [
      {
        id: "create-deterministic-art-generation",
        title: "7.1. Create Deterministic Art Generation",
        content: "",
        instructions: [
          {
            type: "text",
            content: "**Prompt to use:**"
          },
          {
            type: "prompt",
            content: "Create a function that generates deterministic artwork from a wallet address:\n1. Use the wallet address as a seed for randomization\n2. Generate 5-8 geometric shapes (circles, rectangles, triangles)\n3. Create gradient colors based on the address\n4. Position shapes using deterministic algorithms\n5. Ensure the same address always generates the same artwork\n6. Use HTML5 Canvas for rendering",
            copyable: true
          }
        ]
      },
      {
        id: "add-canvas-utilities",
        title: "7.2. Add Canvas Utilities",
        content: "",
        instructions: [
          {
            type: "text",
            content: "**Prompt to use:**"
          },
          {
            type: "prompt",
            content: "Create utility functions for canvas operations:\n1. Function to clear canvas\n2. Function to generate colors from hex values\n3. Function to create gradients\n4. Function to draw different geometric shapes\n5. Function to save canvas as image data",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "Wallet addresses serve as seeds for deterministic randomization",
      "Generate 5-8 geometric shapes for varied but consistent artwork",
      "Gradient colors are derived from the wallet address",
      "Deterministic algorithms ensure same address = same artwork",
      "Canvas utilities provide reusable functions for drawing operations"
    ]
  }
} 