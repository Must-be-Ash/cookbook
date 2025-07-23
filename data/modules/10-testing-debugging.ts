import type { Module } from "../types/cookbook-types"

export const testingDebuggingModule: Module = {
  id: "10-testing-debugging",
  title: "10. Testing and Debugging",
  description: "Get your app ready for Base App and debug common issues",
  estimatedTime: "15 min",
  videoUrl: "/videos/10-testing-debugging.mp4",
  content: {
    introduction: "Before deploying, let's ensure your MiniKit app follows all best practices and debug any build issues that may arise.",
    sections: [
      {
        id: "get-app-ready-base",
        title: "10.1. Get Your App Ready for Base App",
        content: "Before testing, ensure your MiniKit app follows all best practices and debug any build issues:",
        instructions: [
          {
            type: "text",
            content: "**Step 1: Build and Validate**"
          },
          {
            type: "text",
            content: "First, run a production build to catch any errors:"
          },
          {
            type: "terminal",
            content: "npm run build",
            copyable: true
          },
          {
            type: "text",
            content: "**Step 2: Validate with Base App Guidelines**"
          },
          {
            type: "text",
            content: "Go to this link and copy the entire text to your AI agent in Cursor IDE:"
          },
          {
            type: "link",
            content: "https://raw.githubusercontent.com/base/demos/refs/heads/master/minikit/mini-app-help/validate.txt",
            text: "Validation Guide"
          },
          {
            type: "text",
            content: "This will help validate your app structure and ensure it meets all Base App requirements."
          },
          {
            type: "text",
            content: "**Step 3: Debug Build Issues (If Any)**"
          },
          {
            type: "text",
            content: "If you encounter build errors, follow this debugging process:"
          },
          {
            type: "text",
            content: "**A. Ask AI to Fix It**"
          },
          {
            type: "text",
            content: "Share the error message with your AI agent and ask it to fix the issue."
          },
          {
            type: "text",
            content: "**B. Comprehensive Code Audit**"
          },
          {
            type: "text",
            content: "If the problem persists, ask AI to:"
          },
          {
            type: "prompt",
            content: "Review all related files and study them completely without jumping to conclusions or assuming you have found the issue before completing a comprehensive audit of all related files. Add console logs to pin point the problem.",
            copyable: true
          },
          {
            type: "text",
            content: "After adding console logs, test again and share the console output with your AI agent along with screenshots to help it debug."
          },
          {
            type: "text",
            content: "**C. Use Context7 MCP for Farcaster Documentation**"
          },
          {
            type: "text",
            content: "If the problem still persists, ask AI to:"
          },
          {
            type: "prompt",
            content: "Use Context7 MCP to study Farcaster Docs about MiniApps and understand the problem and form a solution keeping in mind all the previous attempts at a solution that didn't work.",
            copyable: true
          },
          {
            type: "link",
            content: "https://www.vibebook.xyz/tips-and-tricks",
            text: "Additional Debugging Tips"
          }
        ]
      },
      {
        id: "local-testing",
        title: "10.2. Local Testing",
        content: "Test your application locally:",
        instructions: [
          {
            type: "terminal",
            content: "# Start development server\nnpm run dev\n\n# Test wallet connection\n# Generate artwork with different addresses\n# Check responsive design",
            copyable: true
          }
        ]
      },
      {
        id: "debug-common-issues",
        title: "10.3. Debug Common Issues",
        content: "**Common issues and solutions:**",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "Canvas not rendering: Check canvas size and context",
              "Wallet not connecting: Verify API keys and provider configuration",
              "Frame not loading: Check MiniKit setup and metadata",
              "Styling issues: Verify Tailwind classes and CSS variables"
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Always run a production build to catch errors early",
      "Use Base App validation guidelines to ensure compliance",
      "Follow a systematic debugging process when issues arise",
      "Test locally with different wallet addresses and devices",
      "Common issues often relate to canvas, wallet, frame, or styling"
    ]
  }
} 