import type { Module } from "../types/cookbook-types"

export const walletIntegrationModule: Module = {
  id: "06-wallet-integration",
  title: "6. Wallet Integration",
  description: "Configure MiniKit provider and implement wallet connection flow",
  estimatedTime: "2 min",
  videoUrl: "https://screen.studio/share/mRJGIgm6",
  content: {
    introduction: "Now let's set up proper wallet integration with MiniKit provider configuration and connection flow management.",
    sections: [
      {
        id: "configure-minikit-provider",
        title: "6.1. Configure MiniKit Provider",
        content: "Update `app/providers.tsx` to ensure proper MiniKit configuration:",
        instructions: [
          {
            type: "subheader",
            content: "Code to verify/update:"
          },
          {
            type: "code",
            content: "<MiniKitProvider\n  notificationProxyUrl=\"/api/notify\"\n  apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}\n  chain={base}\n>\n  {children}\n</MiniKitProvider>",
            language: "tsx",
            copyable: true
          }
        ]
      },
      {
        id: "implement-wallet-connection",
        title: "6.2. Implement Wallet Connection Flow",
        content: "",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Implement wallet connection functionality that:\n1. Uses wagmi hooks for wallet management\n2. Handles connection states (connecting, connected, disconnected)\n3. Shows appropriate UI for each state\n4. Integrates with MiniKit context\n5. Displays wallet address when connected",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "MiniKit provider requires proper API key and chain configuration",
      "Wagmi hooks provide wallet management functionality",
      "Handle multiple connection states for better UX",
      "MiniKit context integration is essential",
      "Display wallet address to confirm connection"
    ]
  }
} 