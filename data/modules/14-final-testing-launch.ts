import type { Module } from "../types/cookbook-types"

export const finalTestingLaunchModule: Module = {
  id: "14-final-testing-launch",
  title: "14. Final Testing and Launch",
  description: "Comprehensive testing and launch checklist for your MiniKit app",
  estimatedTime: "0.5 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/xnBecajO-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155617Z&X-Amz-Expires=7200&X-Amz-Signature=b6e66331db2df5e42a5350245f9b1842befda7e7da3749928b72b0f2aa76e75f&X-Amz-SignedHeaders=host&x-id=GetObject",
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