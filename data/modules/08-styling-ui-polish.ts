import type { Module } from "../types/cookbook-types"

export const stylingUIPolishModule: Module = {
  id: "08-styling-ui-polish",
  title: "8. Styling and UI Polish",
  description: "Update theme configuration and add responsive design",
  estimatedTime: "7 min",
  videoUrl: "/videos/08-styling-ui-polish.mp4",
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
            type: "text",
            content: "**Prompt to use:**"
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