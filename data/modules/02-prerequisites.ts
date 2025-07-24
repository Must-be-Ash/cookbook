import type { Module } from "../types/cookbook-types"

export const prerequisitesModule: Module = {
  id: "02-prerequisites",
  title: "2. Prerequisites",
  description: "Install Node.js, Cursor IDE, Claude Code, and get CDP API key",
  estimatedTime: "8 min",
  videoUrl: "/videos/02-prerequisites.mp4",
  content: {
    introduction:
      "If you already have Node.js, Cursor IDE, and Claude Code installed, you can skip to the next step. Before we start building, you'll need to install three essential tools. Follow the links below to download and install each one:",
    sections: [
      {
        id: "install-cursor",
        title: "2.1. Install Cursor IDE",
        content: "Cursor is an AI-powered code editor that will make development much easier.",
        instructions: [
          {
            type: "link",
            content: "https://cursor.com/",
            text: "Download Cursor IDE"
          },
          {
            type: "text",
            content: "Download and install Cursor for your operating system. This will be your main development environment."
          }
        ],
      },
      {
        id: "install-nodejs",
        title: "2.2. Install Node.js",
        content: "Node.js is required to run our Next.js application and manage packages.",
        instructions: [
          {
            type: "link",
            content: "https://nodejs.org/en",
            text: "Download Node.js"
          },
          {
            type: "text",
            content: "Download and install the latest LTS version. After installation, verify it's working:"
          },
          {
            type: "terminal",
            content: "node --version\nnpm --version",
            copyable: true
          }
        ],
      },
      {
        id: "install-claude-code",
        title: "2.3. Install Claude Code",
        content: "Claude Code will be your AI development assistant throughout this tutorial.",
        instructions: [
          {
            type: "link",
            content: "https://docs.anthropic.com/en/docs/claude-code/overview",
            text: "Claude Code Documentation"
          },
          {
            type: "text",
            content: "Install Claude Code globally via npm:"
          },
          {
            type: "terminal",
            content: "# Install Claude Code globally\nnpm install -g @anthropic/claude-code\n\n# Verify installation\nclaude --version",
            copyable: true
          }
        ],
      },
      {
        id: "get-api-key",
        title: "2.4. Get Your Coinbase Developer Platform API Key",
        content: "You'll need a Client API Key from the Coinbase Developer Platform to use OnchainKit.",
        instructions: [
          {
            type: "link",
            content: "https://portal.cdp.coinbase.com/products/onchainkit",
            text: "Get your API key"
          },
          {
            type: "list",
            content: "",
            items: [
              "Sign up or log in to the Coinbase Developer Platform",
              "Navigate to **Base Tools** in the sidebar",
              "Look for **Client API Key** (not other API keys)",
              "Copy your Client API Key - you'll need this in the next step"
            ]
          }
        ],
      },
      {
        id: "setup-directory",
        title: "2.5. Set Up Your Development Directory",
        content: "Create a new directory for your project:",
        instructions: [
          {
            type: "terminal",
            content: "mkdir shapes-tutorial\ncd shapes-tutorial",
            copyable: true
          }
        ],
      },
      {
        id: "additional-help",
        title: "2.6. Additional Help",
        content: "If you need more detailed installation guides or run into issues:",
        instructions: [
          {
            type: "text",
            content: "For more detailed guide on how to install these tools, head to Vibebook:"
          },
          {
            type: "link",
            content: "https://www.vibebook.xyz/getting-started/install",
            text: "Vibebook Installation Guide"
          },
          {
            type: "text",
            content: "If you had problems with Claude Code, copy paste the text from the following link into your AI chat:"
          },
          {
            type: "link",
            content: "/claude-code.md",
            text: "Download Claude Code Troubleshooting"
          }
        ]
      },
    ],
    keyTakeaways: [
      "Node.js 18+ is required for Next.js development",
      "Cursor IDE provides AI-powered development assistance",
      "Claude Code integrates with your development workflow",
      "The Client API Key is specifically found under Base Tools",
      "Set up a dedicated project directory before starting"
    ],
  },
}
