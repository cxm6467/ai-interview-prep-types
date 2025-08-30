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
