import type { Module } from "../types/cookbook-types"

export const prerequisitesModule: Module = {
  id: "02-prerequisites",
  title: "Prerequisites & Setup",
  description: "Get your development environment ready for MiniKit development",
  estimatedTime: "15 min",
  videoUrl: "/videos/02-prerequisites.mp4",
  content: {
    introduction:
      "Before we start building our MiniKit application, we need to set up our development environment with the right tools and accounts. This module will walk you through installing Node.js, setting up your code editor, and getting access to the Coinbase Developer Platform.",
    sections: [
      {
        id: "node-installation",
        title: "1. Install Node.js",
        content:
          "Node.js is the JavaScript runtime that powers our development tools. We'll need version 18 or higher for the best compatibility with MiniKit.",
        instructions: [
          {
            type: "text",
            content: "Visit the official Node.js website and download the LTS (Long Term Support) version:",
          },
          {
            type: "link",
            content: "https://nodejs.org/",
            text: "Download Node.js LTS",
          },
          {
            type: "text",
            content:
              "After installation, verify that Node.js and npm are installed correctly by running these commands in your terminal:",
          },
          {
            type: "terminal",
            content: "node --version",
            copyable: true,
          },
          {
            type: "terminal",
            content: "npm --version",
            copyable: true,
          },
          {
            type: "text",
            content: "You should see version numbers for both commands. Node.js should be 18.0.0 or higher.",
          },
        ],
      },
      {
        id: "cursor-setup",
        title: "2. Install Cursor IDE",
        content:
          "Cursor is an AI-powered code editor that will significantly speed up your development process. It's built on VS Code but with integrated AI assistance.",
        instructions: [
          {
            type: "text",
            content: "Download Cursor from the official website:",
          },
          {
            type: "link",
            content: "https://cursor.sh/",
            text: "Download Cursor IDE",
          },
          {
            type: "text",
            content:
              "Install Cursor and open it. You'll be prompted to sign in or create an account. The free tier includes plenty of AI assistance for our tutorial.",
          },
          {
            type: "text",
            content:
              "Once installed, you can import your VS Code settings and extensions if you're migrating from VS Code.",
          },
        ],
      },
      {
        id: "claude-code-setup",
        title: "3. Install Claude Code Extension",
        content:
          "The Claude Code extension provides additional AI capabilities directly in your editor, making it easier to write and debug code.",
        instructions: [
          {
            type: "text",
            content: "Install the Claude Code extension using npm:",
          },
          {
            type: "terminal",
            content: "npm install -g @anthropic-ai/claude-code",
            copyable: true,
          },
          {
            type: "text",
            content:
              "After installation, you may need to restart your terminal and code editor to ensure the extension is properly loaded.",
          },
        ],
      },
      {
        id: "coinbase-developer-setup",
        title: "4. Coinbase Developer Platform Setup",
        content:
          "To build MiniKit applications, you'll need access to the Coinbase Developer Platform and an API key for testing and development.",
        instructions: [
          {
            type: "text",
            content: "Visit the Coinbase Developer Platform and create an account:",
          },
          {
            type: "link",
            content: "https://developers.coinbase.com/",
            text: "Coinbase Developer Platform",
          },
          {
            type: "text",
            content: "Once logged in, navigate to the API section and create a new API key. Make sure to:",
          },
          {
            type: "list",
            content: "",
            items: [
              "Select the appropriate permissions for MiniKit development",
              "Copy your API key and secret immediately",
              "Store them securely - you won't be able to see the secret again",
              "Consider using environment variables to store these credentials",
            ],
          },
          {
            type: "text",
            content: "Keep your API credentials handy - we'll use them in the next module when we set up our project.",
          },
        ],
      },
      {
        id: "project-directory",
        title: "5. Create Project Directory",
        content: "Let's create a dedicated workspace for our MiniKit project to keep everything organized.",
        instructions: [
          {
            type: "text",
            content: "Create a new directory for your MiniKit projects:",
          },
          {
            type: "terminal",
            content: "mkdir minikit-projects",
            copyable: true,
          },
          {
            type: "terminal",
            content: "cd minikit-projects",
            copyable: true,
          },
          {
            type: "text",
            content: "This will be our workspace for all the MiniKit applications we build in this course.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Node.js 18+ is required for MiniKit development",
      "Cursor IDE provides AI-powered development assistance",
      "Claude Code extension enhances your coding workflow",
      "Coinbase Developer Platform API keys are essential for MiniKit apps",
      "A dedicated project directory keeps your work organized",
    ],
  },
}
