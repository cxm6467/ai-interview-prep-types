import type { AnalysisResult, PartialAnalysisResult } from './analysis';
import { AnalysisPhase } from './enums';

export interface AnalysisProgress {
  analysisId: string;
  phase: AnalysisPhase;
  progress: number;
  message: string;
  timestamp: string;
  estimatedTimeRemaining?: number;
  error?: {
    code: string;
    message: string;
    details?: string;
  };
}

export interface AnalysisRequest {
  analysisId: string;
  resumeText: string;
  jobDescription: string;
  components?: string;
  connectionId?: string;
  requestedAt: string;
}

export interface StoredAnalysisResult {
  analysisId: string;
  result: AnalysisResult | PartialAnalysisResult;
  status: 'pending' | 'completed' | 'failed';
  completedAt?: string;
  processingTime?: number;
  error?: {
    code: string;
    message: string;
    details?: string;
  };
}
