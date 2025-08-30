import { Environment } from './enums';
import type { AnalysisResult, PartialAnalysisResult } from './analysis';

/**
 * Health check response from the server
 */
export interface HealthResponse {
  /** Current status of the server (e.g., "healthy") */
  status: string;
  /** ISO timestamp of the health check */
  timestamp: string;
  /** Current deployment environment */
  environment: Environment;
  /** Whether OpenAI is properly configured */
  openai_configured: boolean;
}

/**
 * Generic API response data union type for all possible response payloads
 *
 * @example
 * ```typescript
 * // Health check response
 * const healthData: APIResponseData = {
 *   status: "healthy",
 *   timestamp: "2024-01-01T00:00:00Z",
 *   environment: "development",
 *   openai_configured: true
 * };
 *
 * // Analysis response
 * const analysisData: APIResponseData = {
 *   atsScore: { score: 85, strengths: [], improvements: [] },
 *   technicalQuestions: [],
 *   behavioralQuestions: []
 * };
 * ```
 */
export type APIResponseData =
  | AnalysisResult
  | PartialAnalysisResult
  | HealthResponse
  | Record<string, unknown>;
