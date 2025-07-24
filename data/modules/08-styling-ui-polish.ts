import type { Module } from "../types/cookbook-types"

export const stylingUIPolishModule: Module = {
  id: "08-styling-ui-polish",
  title: "8. Styling and UI Polish",
  description: "Update theme configuration and add responsive design",
  estimatedTime: "0.5 min",
  videoUrl: "https://screen-studio-shareable-links.67aa83ffa7fb557cd114a7156fca4e73.r2.cloudflarestorage.com/EntwGtQe-video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=363e5c20253db1195c87384f6dfb4c99%2F20250724%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250724T155550Z&X-Amz-Expires=7200&X-Amz-Signature=a937b456719e52a53ffb620698987396eeac1e94a7c1fff4e826313d0f4ba346&X-Amz-SignedHeaders=host&x-id=GetObject",
  content: {
    introduction: "Now let's polish the user interface with proper theming and responsive design to ensure a great experience across all devices.",
    sections: [
      {
        id: "update-theme-configuration",
        title: "8.1. Update Theme Configuration",
        content: "Ensure your `app/theme.css` includes proper CSS variables:",
        instructions: [
          {
            type: "code",
            content: ":root {\n  --ock-bg-default: #000000;\n  --ock-bg-default-hover: #111111;\n  --ock-bg-default-active: #222222;\n}",
            language: "css",
            copyable: true
          }
        ]
      },
      {
        id: "add-responsive-design",
        title: "8.2. Add Responsive Design",
        content: "",
        instructions: [
          {
            type: "subheader",
            content: "Prompt to use:"
          },
          {
            type: "prompt",
            content: "Make the app fully responsive:\n1. Optimize layout for mobile devices\n2. Adjust canvas size based on screen size\n3. Ensure touch interactions work properly\n4. Add proper spacing and padding\n5. Test on different screen sizes",
            copyable: true
          }
        ]
      }
    ],
    keyTakeaways: [
      "CSS variables provide consistent theming across the app",
      "OnchainKit theme variables ensure proper component styling",
      "Responsive design is crucial for mobile user experience",
      "Canvas size should adapt to different screen sizes",
      "Touch interactions must work properly on mobile devices"
    ]
  }
} 