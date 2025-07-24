import type { Module } from "../types/cookbook-types"

export const projectInitializationModule: Module = {
  id: "03-project-initialization",
  title: "3. Project Initialization",
  description: "Create your MiniKit project using OnchainKit CLI",
  estimatedTime: "4 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/KzEqcXVx-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155136Z&X-Amz-Expires=7200&X-Amz-Signature=d992815a06c5be034d6154811061161c59e7fda8629d0c42708beccf73abfa45&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Now that you have all the prerequisites installed, let's create your MiniKit project using the OnchainKit CLI. This will set up a complete project structure with all the necessary dependencies and configuration.",
    sections: [
      {
        id: "create-minikit-template",
        title: "3.1. Create MiniKit Template",
        content: "Initialize a new MiniKit project using the OnchainKit CLI:",
        instructions: [
          {
            type: "terminal",
            content: "npx create-onchain --mini",
            copyable: true
          },
          {
            type: "text",
            content: "You'll be prompted to:"
          },
          {
            type: "list",
            content: "",
            items: [
              "Enter your app's name: Type your desired app name (e.g., \"shapes-app\")",
              "Paste your Client API Key: Enter the API key you copied from the Coinbase Developer Platform",
              "Share anonymous usage data to help improve create-onchain?: Choose \"no\" or \"yes\" based on your preference"
            ]
          },
          {
            type: "text",
            content: "This will create your MiniKit project with all the necessary files and configuration!"
          }
        ]
      },
      {
        id: "navigate-and-install",
        title: "3.2. Navigate and Install Dependencies",
        content: "",
        instructions: [
          {
            type: "terminal",
            content: "cd shapes-app\nnpm install",
            copyable: true
          }
        ]
      },
      {
        id: "start-development-server",
        title: "3.3. Start Development Server",
        content: "",
        instructions: [
          {
            type: "terminal",
            content: "npm run dev",
            copyable: true
          },
          {
            type: "text",
            content: "Your MiniKit template should now be running at `http://localhost:3000`."
          }
        ]
      },
      {
        id: "write-prd",
        title: "3.4. Write Product Requirements Document",
        content: "Create a Product Requirements Document (PRD) to define your project's goals and specifications. This document helps communicate your vision clearly and prevents AI agents from hallucinating or making incorrect assumptions about your project.",
        instructions: [
          {
            type: "link",
            content: "/shapes-minikit-prd.md",
            text: "Download PRD"
          },
          {
            type: "text",
            content: "Add this PRD file to your project root. It will serve as a reference for AI agents and team members, ensuring everyone understands the project's scope and requirements."
          },
          {
            type: "subheader",
            content: "Additional Tools:"
          },
          {
            type: "text",
            content: "• Use PromptPanda for creating a project plan and prompts"
          },
          {
            type: "link",
            content: "https://www.promptpanda.xyz/",
            text: "promptpanda.xyz"
          },
          {
            type: "text",
            content: "• Use Codeguide.dev for creating PRD"
          },
          {
            type: "link",
            content: "https://www.codeguide.dev/",
            text: "codeguide.dev"
          }
        ]
      }
    ],
    keyTakeaways: [
      "Use npx create-onchain --mini to create your MiniKit project",
      "Provide your app name and Client API Key when prompted",
      "The CLI creates a complete project structure automatically",
      "Your development server runs at http://localhost:3000",
      "Create a PRD document to clearly define project goals and prevent AI hallucination"
    ]
  }
} 