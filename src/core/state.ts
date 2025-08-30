import type { AnalysisResult, PartialAnalysisResult } from './analysis';
import type { AnalysisProgress } from './progress';
import type { ResumeData } from './resume';
import type { JobDescription } from './job';
import type {
  InterviewQuestion,
  CandidateQuestion,
  PresentationTopic,
} from './interview';
import type { ATSScore } from './analysis';
import type { ExtendedThemeType } from '../ui';

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
 * Application step/page identifiers
 */
export type AppStep = 'upload' | 'analysis' | 'dashboard' | 'interview';

/**
 * Simple theme mode for backwards compatibility
 */
export type SimpleTheme = 'light' | 'dark';

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

/**
 * Extended application state interface for complete compatibility
 */
export interface ExtendedAppState {
  /** Currently loaded resume data */
  resumeData: ResumeData | null;
  /** Currently loaded job description */
  jobDescription: JobDescription | null;
  /** Generated interview questions */
  interviewQuestions: InterviewQuestion[];
  /** Questions for candidate to ask interviewer */
  candidateQuestions: CandidateQuestion[];
  /** Suggested presentation topics */
  presentationTopics: PresentationTopic[];
  /** ATS compatibility score and analysis */
  atsScore: ATSScore | null;
  /** Global loading state */
  isLoading: boolean;
  /** Current application step/page */
  currentStep: AppStep;
  /** Current theme mode */
  theme: ExtendedThemeType;
}
