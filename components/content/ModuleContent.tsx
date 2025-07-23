"use client"

import { useApp } from "@/components/providers/AppProvider"
import { CodeBlock } from "./CodeBlock"
import { TerminalCommand } from "./TerminalCommand"
import { PromptBlock } from "./PromptBlock"
import { LinkBlock } from "./LinkBlock"
import { Button3D } from "@/components/ui/Button3D"
import type { Instruction } from "@/data/types/cookbook-types"

export function ModuleContent() {
  const { currentModule, markModuleComplete, completedModules } = useApp()

  if (!currentModule) {
    return (
      <div className="p-8 text-center">
        <p className="text-text-secondary">Select a module to get started</p>
      </div>
    )
  }

  const isModuleComplete = completedModules.has(currentModule.id)

  const renderInstruction = (instruction: Instruction, index: number) => {
    switch (instruction.type) {
      case "code":
        return (
          <CodeBlock
            key={index}
            code={instruction.content}
            language={instruction.language || "javascript"}
            copyable={instruction.copyable}
          />
        )
      case "terminal":
        return <TerminalCommand key={index} command={instruction.content} copyable={instruction.copyable} />
      case "prompt":
        return <PromptBlock key={index} prompt={instruction.content} copyable={instruction.copyable} />
      case "link":
        return <LinkBlock key={index} url={instruction.content} text={instruction.text || instruction.content} />
      case "list":
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-text-primary">
            {instruction.items?.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        )
      default:
        return (
          <p key={index} className="text-text-primary leading-relaxed">
            {instruction.content}
          </p>
        )
    }
  }

  return (
    <div className="p-8 max-w-4xl">
      {/* Module Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-4">{currentModule.title}</h1>
        <p className="text-text-secondary text-lg mb-4">{currentModule.description}</p>
        <div className="flex items-center gap-4 text-sm text-text-muted">
          <span>⏱️ {currentModule.estimatedTime}</span>
        </div>
      </div>

      {/* Introduction */}
      {currentModule.content.introduction && (
        <div className="mb-8">
          <p className="text-text-primary leading-relaxed text-lg">{currentModule.content.introduction}</p>
        </div>
      )}

      {/* Sections */}
      {currentModule.content.sections.map((section, sectionIndex) => (
        <div key={section.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">{section.title}</h2>

          {section.content && <p className="text-text-primary leading-relaxed mb-6">{section.content}</p>}

          <div className="space-y-6">
            {section.instructions.map((instruction, instructionIndex) =>
              renderInstruction(instruction, instructionIndex),
            )}
          </div>
        </div>
      ))}

      {/* Key Takeaways */}
      {currentModule.content.keyTakeaways && currentModule.content.keyTakeaways.length > 0 && (
        <div className="mt-12 p-6 bg-surface-elevated rounded-lg border border-border max-w-3xl">
          <h3 className="text-xl font-semibold text-text-primary mb-4">🎯 Key Takeaways</h3>
          <ul className="space-y-2">
            {currentModule.content.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span className="text-text-primary">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Complete Module Button */}
      <div className="mt-12 pt-8 border-t border-border">
        <Button3D
          variant="success"
          size="lg"
          isPressed={isModuleComplete}
          onClick={() => markModuleComplete(currentModule.id)}
        >
          {isModuleComplete ? "✓ Module Complete" : "Mark Module Complete"}
        </Button3D>
      </div>
    </div>
  )
}
