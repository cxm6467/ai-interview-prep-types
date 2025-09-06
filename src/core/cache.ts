import type { AnalysisResult } from './analysis';

/**
 * Cache entry interface for storing analysis results with metadata
 *
 * @example
 * ```typescript
 * const cacheEntry: CacheEntry = {
 *   jobHash: "abc123def456",
 *   interviewerRole: "Senior Software Engineer",
 *   analysisResult: {
 *     atsScore: { score: 85, strengths: [...], improvements: [...] },
 *     technicalQuestions: [...],
 *     behavioralQuestions: [...]
 *   },
 *   createdAt: new Date(),
 *   lastAccessed: new Date()
 * };
 * ```
 */
export interface CacheEntry {
  /** Hash of the job description and resume combination */
  jobHash: string;
  /** Role or position being interviewed for */
  interviewerRole: string;
  /** Cached analysis result */
  analysisResult: AnalysisResult;
  /** When this cache entry was created */
  createdAt: Date;
  /** When this cache entry was last accessed */
  lastAccessed: Date;
}

/**
 * Cache configuration options
 */
export interface CacheOptions {
  /** Maximum number of entries to store (default: 100) */
  maxEntries?: number;
  /** Time to live in milliseconds (default: 24 hours) */
  ttl?: number;
  /** Whether to persist cache to storage */
  persist?: boolean;
}

/**
 * Cache statistics for monitoring and debugging
 */
export interface CacheStats {
  /** Total number of cache entries */
  totalEntries: number;
  /** Number of cache hits */
  hits: number;
  /** Number of cache misses */
  misses: number;
  /** Cache hit ratio (hits / (hits + misses)) */
  hitRatio: number;
  /** Total memory usage estimate in bytes */
  memoryUsage: number;
}
