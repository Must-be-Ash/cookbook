import type { Module } from "./types/cookbook-types"
import { introductionModule } from "./modules/01-introduction"
import { prerequisitesModule } from "./modules/02-prerequisites"
import { projectInitializationModule } from "./modules/03-project-initialization"
import { startClaudeModule } from "./modules/04-start-claude"
import { buildingShapeGeneratorModule } from "./modules/05-building-shape-generator"
import { walletIntegrationModule } from "./modules/06-wallet-integration"
import { generativeArtAlgorithmModule } from "./modules/07-generative-art-algorithm"
import { stylingUIPolishModule } from "./modules/08-styling-ui-polish"
import { minikitFrameIntegrationModule } from "./modules/09-minikit-frame-integration"
import { testingDebuggingModule } from "./modules/10-testing-debugging"
import { deploymentPreparationModule } from "./modules/11-deployment-preparation"
import { vercelDeploymentModule } from "./modules/12-vercel-deployment"
import { manifestConfigurationModule } from "./modules/13-manifest-configuration"
import { finalTestingLaunchModule } from "./modules/14-final-testing-launch"
import { nextStepsExtensionsModule } from "./modules/15-next-steps-extensions"

export const cookbookModules: Module[] = [
  introductionModule,
  prerequisitesModule,
  projectInitializationModule,
  startClaudeModule,
  buildingShapeGeneratorModule,
  walletIntegrationModule,
  generativeArtAlgorithmModule,
  stylingUIPolishModule,
  minikitFrameIntegrationModule,
  testingDebuggingModule,
  deploymentPreparationModule,
  vercelDeploymentModule,
  manifestConfigurationModule,
  finalTestingLaunchModule,
  nextStepsExtensionsModule,
]
