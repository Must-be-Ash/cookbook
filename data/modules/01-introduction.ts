import type { Module } from "../types/cookbook-types"

export const introductionModule: Module = {
  id: "01-introduction",
  title: "1. Introduction",
  description: "Overview of what you'll build and learn in this MiniKit tutorial",
  estimatedTime: "1 min",
  videoUrl: "https://www.youtube.com/embed/4vcQW8612Ns",
  content: {
    introduction: "A complete guide to building a generative art MiniKit application that creates unique artwork based on wallet addresses.",
    sections: [
      {
        id: "what-youll-build",
        title: "What You'll Build",
        content: "In this tutorial, you'll create \"Shapes\" - a MiniKit application that generates unique, deterministic artwork based on wallet addresses. Users can connect their wallets and generate personalized generative art that's consistent and shareable.",
        instructions: []
      },
      {
        id: "what-youll-learn",
        title: "What You'll Learn",
        content: "",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "Setting up a MiniKit development environment",
              "Using Claude Code for AI-assisted development",
              "Building with Next.js 15 and TypeScript",
              "Integrating OnchainKit for wallet functionality",
              "Creating deterministic generative art",
              "Deploying MiniKit applications"
            ]
          }
        ]
      },
      {
        id: "prerequisites",
        title: "Prerequisites",
        content: "",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "Basic knowledge of React and TypeScript",
              "Node.js 18+ installed",
              "A Coinbase Developer Platform account",
              "A Vercel account (for deployment)"
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Create a MiniKit app that generates unique artwork from wallet addresses",
      "Learn modern web3 development with Next.js 15 and OnchainKit",
      "Use AI-assisted development with Claude Code",
      "Deploy a complete MiniKit application to production"
    ]
  }
} 