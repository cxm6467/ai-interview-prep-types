/**
 * Types of interview questions
 */
export type InterviewQuestionType =
  | 'technical'
  | 'behavioral'
  | 'situational'
  | 'general';

/**
 * Categories for candidate questions
 */
export type CandidateQuestionCategory =
  | 'role'
  | 'company'
  | 'team'
  | 'growth'
  | 'culture';

/**
 * Interview timing stages
 */
export type InterviewTiming = 'early' | 'middle' | 'end' | 'any';

/**
 * Represents an interview question with its suggested answer and guidance
 *
 * @example
 * ```typescript
 * const question: InterviewQuestion = {
 *   id: "tech-001",
 *   question: "Explain the difference between let and const in JavaScript",
 *   type: "technical",
 *   suggestedAnswer: "const creates immutable bindings while let allows reassignment...",
 *   tips: ["Use examples", "Mention block scoping", "Discuss hoisting"]
 * };
 * ```
 */
export interface InterviewQuestion {
  /** Unique identifier for the question */
  id: string;
  /** The actual interview question text */
  question: string;
  /** Category of the interview question */
  type: InterviewQuestionType;
  /** Suggested response or talking points for the question (optional) */
  suggestedAnswer?: string;
  /** Array of tips for answering effectively (optional) */
  tips?: string[];
}

/**
 * Represents a presentation topic that might be requested during an interview
 *
 * @example
 * ```typescript
 * const topic: PresentationTopic = {
 *   id: "pres-001",
 *   title: "Microservices Architecture Benefits",
 *   bullets: [
 *     "Scalability and independent deployment",
 *     "Technology diversity and team autonomy",
 *     "Fault isolation and resilience"
 *   ]
 * };
 * ```
 */
export interface PresentationTopic {
  /** Unique identifier for the presentation topic */
  id: string;
  /** The main topic or theme for the presentation */
  title: string;
  /** Array of key points or talking points to cover in the presentation */
  bullets: string[];
}

/**
 * Technical interview question with specific type constraint
 *
 * @example
 * ```typescript
 * const techQuestion: TechnicalQuestion = {
 *   id: "tech-001",
 *   question: "Explain the difference between let and const in JavaScript",
 *   type: "technical",
 *   suggestedAnswer: "const creates immutable bindings...",
 *   tips: ["Use examples", "Mention block scoping"]
 * };
 * ```
 */
export interface TechnicalQuestion extends InterviewQuestion {
  /** Must be 'technical' for technical questions */
  type: 'technical';
}

/**
 * Behavioral interview question with specific type constraint
 *
 * @example
 * ```typescript
 * const behavioralQuestion: BehavioralQuestion = {
 *   id: "behavioral-001",
 *   question: "Tell me about a time when you had to work under pressure",
 *   type: "behavioral",
 *   suggestedAnswer: "Use the STAR method...",
 *   tips: ["Be specific", "Focus on your actions", "Quantify results"]
 * };
 * ```
 */
export interface BehavioralQuestion extends InterviewQuestion {
  /** Must be 'behavioral' for behavioral questions */
  type: 'behavioral';
}

/**
 * Questions that a candidate should ask during the interview to demonstrate interest and gather information
 *
 * @example
 * ```typescript
 * const candidateQuestion: CandidateQuestion = {
 *   id: "cand-001",
 *   category: "team",
 *   question: "What does a typical day look like for someone in this role?",
 *   rationale: "Shows interest in day-to-day responsibilities and work environment",
 *   timing: "early"
 * };
 * ```
 */
export interface CandidateQuestion {
  /** Unique identifier for the candidate question */
  id: string;
  /** Category or theme of the question */
  category: CandidateQuestionCategory;
  /** The actual question text that the candidate should ask */
  question: string;
  /** Explanation of why this question is valuable to ask */
  rationale: string;
  /** Which interview stage this question is most appropriate for */
  timing: InterviewTiming;
}
