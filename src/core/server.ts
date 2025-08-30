import { Environment } from './enums';

export interface HealthResponse {
  status: string;
  timestamp: string;
  environment: Environment;
  openai_configured: boolean;
}
