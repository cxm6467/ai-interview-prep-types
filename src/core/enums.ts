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

/**
 * Logging levels for application logging
 */
export enum LogLevel {
  /** Debug level logging */
  DEBUG = 'DEBUG',
  /** Info level logging */
  INFO = 'INFO',
  /** Warning level logging */
  WARN = 'WARN',
  /** Error level logging */
  ERROR = 'ERROR',
}

/**
 * Application deployment environments
 */
export enum Environment {
  /** Development environment */
  DEVELOPMENT = 'development',
  /** Staging environment */
  STAGING = 'staging',
  /** Production environment */
  PRODUCTION = 'production',
  /** Test environment */
  TEST = 'test',
}

/**
 * Cache time-to-live values in seconds
 */
export enum CacheTTL {
  /** Short cache duration - 5 minutes */
  SHORT = 300, // 5 minutes
  /** Medium cache duration - 1 hour */
  MEDIUM = 3600, // 1 hour
  /** Long cache duration - 24 hours */
  LONG = 86400, // 24 hours
  /** Weekly cache duration - 1 week */
  WEEK = 604800, // 1 week
}

/**
 * Available OpenAI models for analysis
 */
export enum OpenAIModel {
  /** GPT-3.5 Turbo model */
  GPT_3_5_TURBO = 'gpt-3.5-turbo-0125',
  /** GPT-4 model */
  GPT_4 = 'gpt-4',
  /** GPT-4 Turbo model */
  GPT_4_TURBO = 'gpt-4-turbo-preview',
}

/**
 * Rate limiting tiers for API access
 */
export enum RateLimitTier {
  /** Basic tier with standard limits */
  BASIC = 'basic',
  /** Premium tier with higher limits */
  PREMIUM = 'premium',
  /** Enterprise tier with highest limits */
  ENTERPRISE = 'enterprise',
}
