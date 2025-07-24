import type { Module } from "../types/cookbook-types"

export const startClaudeModule: Module = {
  id: "04-start-claude",
  title: "4. Start Claude",
  description: "Initialize Claude Code in your project for AI-assisted development",
  estimatedTime: "1 min",
  videoUrl: "https://screen.studio/share/5DqoTIAB",
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