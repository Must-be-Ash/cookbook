export interface Module {
  id: string
  title: string
  description: string
  estimatedTime: string
  videoUrl: string
  content: ModuleContent
}

export interface ModuleContent {
  introduction: string
  sections: Section[]
  keyTakeaways: string[]
}

export interface Section {
  id: string
  title: string
  content?: string
  instructions: Instruction[]
}

export interface Instruction {
  type: "text" | "code" | "terminal" | "prompt" | "link" | "list" | "subheader"
  content: string
  language?: string
  copyable?: boolean
  text?: string
  items?: string[]
  filename?: string
}
