import { Environment } from './enums';

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
