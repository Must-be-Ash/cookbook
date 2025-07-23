import type { Module } from "../types/cookbook-types"

export const deploymentPreparationModule: Module = {
  id: "11-deployment-preparation",
  title: "11. Deployment Preparation",
  description: "Set up Git repository and prepare for deployment",
  estimatedTime: "10 min",
  videoUrl: "/videos/11-deployment-preparation.mp4",
  content: {
    introduction: "Before deploying to production, let's set up version control and prepare your code repository for deployment.",
    sections: [
      {
        id: "setup-git-repository",
        title: "11.1. Set Up Git Repository",
        content: "",
        instructions: [
          {
            type: "text",
            content: "**A. Configure .gitignore**"
          },
          {
            type: "text",
            content: "Ask your AI agent to ensure your `.gitignore` file is properly configured:"
          },
          {
            type: "text",
            content: "**Prompt to use:**"
          },
          {
            type: "prompt",
            content: "Make sure my .gitignore file is set up correctly and includes my env files and node_modules directory.",
            copyable: true
          },
          {
            type: "text",
            content: "**B. Create Private GitHub Repository**"
          },
          {
            type: "text",
            content: "Go to https://github.com/new and:"
          },
          {
            type: "list",
            content: "",
            items: [
              "Enter your repository name under \"Repository name\"",
              "Select \"Private\"",
              "Press the green \"Create Repository\" button"
            ]
          },
          {
            type: "text",
            content: "**C. Push Your Code to GitHub**"
          },
          {
            type: "text",
            content: "After creating the repository, you'll see two command blocks. Use both:"
          },
          {
            type: "text",
            content: "First, run the commands from \"…or create a new repository on the command line\":"
          },
          {
            type: "terminal",
            content: "echo \"# your-repo-name\" >> README.md\ngit init\ngit add README.md\ngit commit -m \"first commit\"\ngit branch -M main\ngit remote add origin https://github.com/your-username/your-repo-name.git\ngit push -u origin main",
            copyable: true
          },
          {
            type: "text",
            content: "Then run:"
          },
          {
            type: "terminal",
            content: "git add .\ngit commit -m \" First commit \"\ngit push origin main",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "Proper .gitignore configuration prevents committing sensitive files",
      "Private repositories keep your code secure during development",
      "Initialize Git with proper remote origin setup",
      "Commit and push all code before deployment",
      "Follow GitHub's recommended setup commands"
    ]
  }
} 