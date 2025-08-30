import type { AnalysisResult, PartialAnalysisResult } from './analysis';
import { AnalysisPhase } from './enums';

/**
 * Progress tracking for analysis operations
 */
export interface AnalysisProgress {
  /** Unique identifier for the analysis */
  analysisId: string;
  /** Current phase of the analysis process */
  phase: AnalysisPhase;
  /** Progress percentage (0-100) */
  progress: number;
  /** Human-readable progress message */
  message: string;
  /** ISO timestamp of this progress update */
  timestamp: string;
  /** Estimated time remaining in seconds */
  estimatedTimeRemaining?: number;
  /** Error information if the analysis failed */
  error?: {
    /** Error code */
    code: string;
    /** Error message */
    message: string;
    /** Additional error details */
    details?: string;
  };
}

/**
 * Request for starting an analysis operation
 */
export interface AnalysisRequest {
  /** Unique identifier for this analysis */
  analysisId: string;
  /** The resume text to analyze */
  resumeText: string;
  /** The job description to analyze against */
  jobDescription: string;
  /** Comma-separated list of components to include */
  components?: string;
  /** WebSocket connection ID for real-time updates */
  connectionId?: string;
  /** ISO timestamp when the request was made */
  requestedAt: string;
}

/**
 * Stored analysis result with metadata
 */
export interface StoredAnalysisResult {
  /** Unique identifier for the analysis */
  analysisId: string;
  /** The analysis result data */
  result: AnalysisResult | PartialAnalysisResult;
  /** Current status of the analysis */
  status: 'pending' | 'completed' | 'failed';
  /** ISO timestamp when the analysis completed */
  completedAt?: string;
  /** Total processing time in milliseconds */
  processingTime?: number;
  /** Error information if the analysis failed */
  error?: {
    /** Error code */
    code: string;
    /** Error message */
    message: string;
    /** Additional error details */
    details?: string;
  };
}
