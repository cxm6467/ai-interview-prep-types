/**
 * Request body for analysis API endpoints
 */
export interface AnalysisRequestBody {
  /** The candidate's resume text */
  resumeText: string;
  /** The job description to analyze against */
  jobDescription: string;
}
