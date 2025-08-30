/**
 * Represents an interview question with its suggested answer
 */
export interface InterviewQuestion {
  /** The interview question text */
  question: string;
  /** Suggested answer or talking points for the question */
  answer: string;
  /** Category of question (technical, behavioral, etc.) */
  category?: 'technical' | 'behavioral' | 'situational' | 'general';
  /** Difficulty level */
  difficulty?: 'easy' | 'medium' | 'hard';
}

/**
 * Represents a presentation topic that might be requested during an interview
 */
export interface PresentationTopic {
  /** The main topic or theme for the presentation */
  topic: string;
  /** Key points or talking points to cover in the presentation */
  keyPoints: string[];
  /** Estimated time for presentation */
  duration?: number;
  /** Suggested slides or structure */
  structure?: string[];
}

/**
 * Questions that a candidate should ask during the interview
 */
export interface CandidateQuestion {
  /** The question text */
  question: string;
  /** Why this question is important to ask */
  reasoning: string;
  /** What stage of interview this question is appropriate for */
  stage: 'initial' | 'technical' | 'final' | 'any';
}
