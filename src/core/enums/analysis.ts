/**
 * Phases of the analysis process for tracking progress
 */
export enum AnalysisPhase {
  /** Analysis has been started */
  STARTED = 'started',
  /** Currently parsing and processing the resume text */
  PARSING_RESUME = 'parsing_resume',
  /** Currently parsing and processing the job description */
  PARSING_JOB_DESCRIPTION = 'parsing_job_description',
  /** Generating ATS compatibility score */
  GENERATING_ATS_SCORE = 'generating_ats_score',
  /** Generating interview questions */
  GENERATING_QUESTIONS = 'generating_questions',
  /** Generating presentation topic suggestions */
  GENERATING_PRESENTATIONS = 'generating_presentations',
  /** Generating questions for the candidate to ask */
  GENERATING_CANDIDATE_QUESTIONS = 'generating_candidate_questions',
  /** Finalizing and consolidating results */
  FINALIZING = 'finalizing',
  /** Analysis completed successfully */
  COMPLETED = 'completed',
  /** An error occurred during processing */
  ERROR = 'error',
}

/**
 * Individual components that can be included in an analysis result
 */
export enum AnalysisComponent {
  /** ATS compatibility score component */
  ATS_SCORE = 'atsScore',
  /** Technical interview questions component */
  TECHNICAL_QUESTIONS = 'technicalQuestions',
  /** Behavioral interview questions component */
  BEHAVIORAL_QUESTIONS = 'behavioralQuestions',
  /** Presentation topics component */
  PRESENTATION_TOPICS = 'presentationTopics',
  /** Questions for candidate to ask interviewer */
  CANDIDATE_QUESTIONS = 'candidateQuestions',
  /** Candidate strengths component */
  STRENGTHS = 'strengths',
  /** Areas for improvement component */
  IMPROVEMENTS = 'improvements',
}

/**
 * Types of content that can be processed
 */
export enum ContentType {
  /** Resume content type */
  RESUME = 'resume',
  /** Job description content type */
  JOB_DESCRIPTION = 'job-description',
  /** General content type */
  GENERAL = 'general',
}
