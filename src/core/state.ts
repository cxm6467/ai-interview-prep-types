import type { AnalysisResult, PartialAnalysisResult } from './analysis';
import type { AnalysisProgress } from './progress';
import type { ResumeData } from './resume';
import type { JobDescription } from './job';

/**
 * Application error state
 */
export interface AppError {
  /** Error message */
  message: string;
  /** Error code */
  code?: string;
  /** Timestamp when error occurred */
  timestamp: string;
}

/**
 * User preferences and settings
 */
export interface AppSettings {
  /** Preferred theme */
  theme: string;
  /** Whether to show detailed analysis */
  showDetailedAnalysis: boolean;
  /** Whether to auto-save progress */
  autoSave: boolean;
}

/**
 * Loading states for different operations
 */
export interface LoadingStates {
  /** Whether resume is being processed */
  resume: boolean;
  /** Whether job description is being processed */
  jobDescription: boolean;
  /** Whether analysis is being generated */
  analysis: boolean;
}

/**
 * Active sections in the application
 */
export type ActiveSection = 'upload' | 'analysis' | 'results' | 'settings';

/**
 * UI state management
 */
export interface UIState {
  /** Currently active tab or section */
  activeSection: ActiveSection;
  /** Whether sidebar is expanded */
  sidebarExpanded: boolean;
  /** Loading states for different operations */
  loading: LoadingStates;
}

/**
 * Main application state interface
 */
export interface AppState {
  /** Current resume data */
  resume?: ResumeData;
  /** Current job description data */
  jobDescription?: JobDescription;
  /** Current analysis result */
  analysisResult?: AnalysisResult | PartialAnalysisResult;
  /** Current analysis progress */
  progress?: AnalysisProgress;
  /** Whether analysis is currently running */
  isAnalyzing: boolean;
  /** Current error state */
  error?: AppError;
  /** User preferences and settings */
  settings: AppSettings;
  /** UI state */
  ui: UIState;
}
