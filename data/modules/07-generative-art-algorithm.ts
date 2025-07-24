import type { Module } from "../types/cookbook-types"

export const generativeArtAlgorithmModule: Module = {
  id: "07-generative-art-algorithm",
  title: "7. Generative Art Algorithm",
  description: "Create deterministic art generation and canvas utilities",
  estimatedTime: "2 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/Z0VQqewo-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155655Z&X-Amz-Expires=7200&X-Amz-Signature=93a41e0c2c8d01c499840be24a9e5267143af981f7e15b03ff0b6337a6189e3a&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Now let's implement the core algorithm that generates unique, deterministic artwork based on wallet addresses using HTML5 Canvas.",
    sections: [
      {
        id: "create-deterministic-art-generation",
        title: "7.1. Create Deterministic Art Generation",
        content: "",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
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
            type: "subheader",
            content: "Prompt to use:"
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