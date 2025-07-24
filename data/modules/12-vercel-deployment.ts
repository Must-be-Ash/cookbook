import type { Module } from "../types/cookbook-types"

export const vercelDeploymentModule: Module = {
  id: "12-vercel-deployment",
  title: "12. Vercel Deployment",
  description: "Deploy your MiniKit app to Vercel and configure environment variables",
  estimatedTime: "7 min",
  videoUrl: "https://www.youtube.com/embed/YmbixS5ugyc",
  content: {
    introduction: "Now let's deploy your MiniKit application to Vercel and configure all the necessary environment variables for production. If you don't have a Vercel account, you'll need to create one at https://vercel.com/",
    sections: [
      {
        id: "deploy-to-vercel",
        title: "12.1. Deploy to Vercel",
        content: "",
        instructions: [
          {
            type: "terminal",
            content: "# Install Vercel CLI\nnpm install -g vercel\n\n# Deploy\nvercel\n\n# Set environment variables\nvercel env add NEXT_PUBLIC_ONCHAINKIT_API_KEY\nvercel env add NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME\nvercel env add NEXT_PUBLIC_URL",
            copyable: true
          }
        ]
      },
      {
        id: "environment-configuration",
        title: "12.2. Environment Configuration",
        content: "Now that you have your Vercel URL, set up your environment variables:",
        instructions: [
          {
            type: "subheader",
            content: "Generate Environment Configuration"
          },
          {
            type: "text",
            content: "Run this command to automatically populate your environment file:"
          },
          {
            type: "terminal",
            content: "npx create-onchain --manifest",
            copyable: true
          },
          {
            type: "text",
            content: "This will set up your `.env.local` file automatically. Just make sure your `NEXT_PUBLIC_ONCHAINKIT_API_KEY` is properly set."
          },
          {
            type: "subheader",
            content: "Update Production Environment Variables"
          },
          {
            type: "text",
            content: "Set the environment variables in your Vercel dashboard:"
          },
          {
            type: "terminal",
            content: "# Set environment variables in Vercel\nvercel env add NEXT_PUBLIC_ONCHAINKIT_API_KEY\nvercel env add NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME\nvercel env add NEXT_PUBLIC_URL\nvercel env add NEXT_PUBLIC_SPLASH_IMAGE\nvercel env add NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR",
            copyable: true
          },
          {
            type: "subheader",
            content: "Final Steps"
          },
          {
            type: "list",
            content: "",
            items: [
              "Update `NEXT_PUBLIC_URL` to your production domain",
              "Verify all environment variables are set",
              "Test the deployed application",
              "Check frame functionality in Farcaster"
            ]
          }
        ]
      }
    ],
    keyTakeaways: [
      "Install Vercel CLI globally for deployment commands",
      "Use npx create-onchain --manifest to generate environment config",
      "Set all required environment variables in Vercel dashboard",
      "Update NEXT_PUBLIC_URL to your production domain",
      "Test deployed app and frame functionality after deployment"
    ]
  }
} 