import type { Module } from "../types/cookbook-types"

export const finalTestingLaunchModule: Module = {
  id: "14-final-testing-launch",
  title: "14. Final Testing and Launch",
  description: "Comprehensive testing and launch checklist for your MiniKit app",
  estimatedTime: "15 min",
  videoUrl: "/videos/14-final-testing-launch.mp4",
  content: {
    introduction: "Let's perform comprehensive testing of your complete MiniKit application and prepare for launch with a final checklist.",
    sections: [
      {
        id: "comprehensive-testing",
        title: "14.1. Comprehensive Testing",
        content: "Test your complete application:",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "Wallet connection works",
              "Art generation is deterministic",
              "Responsive design functions properly",
              "Frame loads in Farcaster",
              "All environment variables are configured",
              "Production build works"
            ]
          }
        ]
      },
      {
        id: "launch-checklist",
        title: "14.2. Launch Checklist",
        content: "",
        instructions: [
          {
            type: "list",
            content: "",
            items: [
              "Domain is properly configured",
              "Manifest is accessible and valid",
              "All assets (icons, splash images) are uploaded",
              "Environment variables are set in production",
              "Application is fully tested"
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Test all core functionality before launch",
      "Verify deterministic art generation works consistently",
      "Ensure responsive design works on all devices",
      "Validate Farcaster frame integration",
      "Complete launch checklist before going live"
    ]
  }
} 