import type { Module } from "../types/cookbook-types"

export const startClaudeModule: Module = {
  id: "04-start-claude",
  title: "4. Start Claude",
  description: "Initialize Claude Code in your project for AI-assisted development",
  estimatedTime: "1 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/5DqoTIAB-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155149Z&X-Amz-Expires=7200&X-Amz-Signature=4c0d3059467f19c60602fb53ced9c8cbb025ceeb43aad82df3721c7d49f05e35&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Now that your project is set up, let's initialize Claude Code to provide AI-assisted development throughout the tutorial.",
    sections: [
      {
        id: "initialize-claude-code",
        title: "4.1. Initialize Claude Code in Your Project",
        content: "From your project root directory, start an interactive session:",
        instructions: [
          {
            type: "terminal",
            content: "claude",
            copyable: true
          },
          {
            type: "text",
            content: "Then type `/init` and press enter. This will have Claude read your codebase and automatically create a `CLAUDE.md` file with project-specific guidance."
          },
            {
              type: "terminal",
              content: "/init",
              copyable: true
            },
        ]
      }
    ],
    keyTakeaways: [
      "Use 'claude' command to start an interactive session",
      "Type '/init' to initialize Claude with your project",
      "Claude will create a CLAUDE.md file with project guidance",
      "This enables AI-assisted development for the rest of the tutorial"
    ]
  }
} 