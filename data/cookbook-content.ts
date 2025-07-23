import type { Module } from "./types/cookbook-types"
import { prerequisitesModule } from "./modules/02-prerequisites"

export const cookbookModules: Module[] = [
  {
    id: "01-introduction",
    title: "Introduction to MiniKit",
    description: "Overview of MiniKit and what we'll build together",
    estimatedTime: "5 min",
    videoUrl: "/videos/01-introduction.mp4",
    content: {
      introduction: "Coming soon...",
      sections: [],
      keyTakeaways: [],
    },
  },
  prerequisitesModule,
  {
    id: "03-project-setup",
    title: "Project Setup",
    description: "Initialize your MiniKit project structure",
    estimatedTime: "10 min",
    videoUrl: "/videos/03-project-setup.mp4",
    content: {
      introduction: "Coming soon...",
      sections: [],
      keyTakeaways: [],
    },
  },
  {
    id: "04-basic-components",
    title: "Basic Components",
    description: "Create your first MiniKit components",
    estimatedTime: "15 min",
    videoUrl: "/videos/04-basic-components.mp4",
    content: {
      introduction: "Coming soon...",
      sections: [],
      keyTakeaways: [],
    },
  },
  {
    id: "05-state-management",
    title: "State Management",
    description: "Managing application state in MiniKit",
    estimatedTime: "20 min",
    videoUrl: "/videos/05-state-management.mp4",
    content: {
      introduction: "Coming soon...",
      sections: [],
      keyTakeaways: [],
    },
  },
  // Placeholder modules for the remaining 10 modules
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `${String(i + 6).padStart(2, "0")}-module-${i + 6}`,
    title: `Module ${i + 6}`,
    description: `Coming soon - Module ${i + 6} description`,
    estimatedTime: "15 min",
    videoUrl: `/videos/${String(i + 6).padStart(2, "0")}-module-${i + 6}.mp4`,
    content: {
      introduction: "Coming soon...",
      sections: [],
      keyTakeaways: [],
    },
  })),
]
