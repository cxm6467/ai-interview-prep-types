export enum AnalysisPhase {
  STARTED = 'started',
  PARSING_RESUME = 'parsing_resume',
  PARSING_JOB_DESCRIPTION = 'parsing_job_description',
  GENERATING_ATS_SCORE = 'generating_ats_score',
  GENERATING_QUESTIONS = 'generating_questions',
  GENERATING_PRESENTATIONS = 'generating_presentations',
  GENERATING_CANDIDATE_QUESTIONS = 'generating_candidate_questions',
  FINALIZING = 'finalizing',
  COMPLETED = 'completed',
  ERROR = 'error',
}

export enum AnalysisComponent {
  ATS_SCORE = 'atsScore',
  TECHNICAL_QUESTIONS = 'technicalQuestions',
  BEHAVIORAL_QUESTIONS = 'behavioralQuestions',
  PRESENTATION_TOPICS = 'presentationTopics',
  CANDIDATE_QUESTIONS = 'candidateQuestions',
  STRENGTHS = 'strengths',
  IMPROVEMENTS = 'improvements',
}

export enum ContentType {
  RESUME = 'resume',
  JOB_DESCRIPTION = 'job-description',
  GENERAL = 'general',
}

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
  TEST = 'test',
}

export enum CacheTTL {
  SHORT = 300, // 5 minutes
  MEDIUM = 3600, // 1 hour
  LONG = 86400, // 24 hours
  WEEK = 604800, // 1 week
}

export enum OpenAIModel {
  GPT_3_5_TURBO = 'gpt-3.5-turbo-0125',
  GPT_4 = 'gpt-4',
  GPT_4_TURBO = 'gpt-4-turbo-preview',
}

export enum RateLimitTier {
  BASIC = 'basic',
  PREMIUM = 'premium',
  ENTERPRISE = 'enterprise',
}
