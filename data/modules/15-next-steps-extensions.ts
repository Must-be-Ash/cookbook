import type { Module } from "../types/cookbook-types"

export const nextStepsExtensionsModule: Module = {
  id: "15-next-steps-extensions",
  title: "15. Next Steps and Extensions",
  description: "Explore potential enhancements and learning resources",
  estimatedTime: "1 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/ubeQJOPF-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155621Z&X-Amz-Expires=7200&X-Amz-Signature=4cc635435e7903ad1f609973e0a69b16ad51ab98805a23029884006d579e0c35&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Congratulations on building your complete MiniKit application! Let's explore potential enhancements and additional learning resources.",
    sections: [
      {
        id: "potential-enhancements",
        title: "Potential Enhancements",
        content: "",
        instructions: [
          {
            type: "text",
            content: "1. Social Sharing: Add sharing functionality for generated artwork"
          },
          {
            type: "text",
            content: "2. Monetization and NFT Integration: Add ability to mint artwork as NFTs for a given price"
          },
          {
            type: "text",
            content: "3. Gallery: Create a gallery of all generated artworks"
          }
        ]
      },
      {
        id: "learning-resources",
        title: "Learning Resources",
        content: "",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "MiniKit Documentation: https://docs.base.org/base-app/build-with-minikit/overview",
              "OnchainKit Documentation: https://docs.base.org/onchainkit/getting-started",
              "Farcaster Miniapp Documentation: https://miniapps.farcaster.xyz/",
              "Canvas API Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
            ]
          }
        ]
      },
      {
        id: "conclusion",
        title: "Conclusion",
        content: "Congratulations! You've successfully built a complete MiniKit application that generates unique artwork based on wallet addresses. You've learned how to integrate wallet functionality, create deterministic generative art, and deploy a MiniKit application to production.",
        instructions: [
          {
            type: "text",
            content: "Your Shapes app demonstrates the power of combining blockchain technology with creative applications, providing users with personalized, shareable digital art that's uniquely theirs."
          }
        ]
      }
    ],
    keyTakeaways: [
      "You've built a complete generative art MiniKit application",
      "Potential enhancements include social sharing, NFT minting, and galleries",
      "Continue learning with official documentation resources",
      "Your app demonstrates the creative potential of blockchain technology",
      "You now have the skills to build more advanced MiniKit applications"
    ]
  }
} 