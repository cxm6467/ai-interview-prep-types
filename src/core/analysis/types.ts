import { AnalysisComponent } from '../enums';
import type { InterviewQuestion, PresentationTopic } from '../interview';

/**
 * Represents an Applicant Tracking System (ATS) score for a resume
 */
export interface ATSScore {
  /** Numerical score from 0-100 indicating ATS compatibility */
  score: number;
  /** List of identified strengths in the resume */
  strengths: string[];
  /** List of areas for improvement */
  improvements: string[];
  /** Keywords that were successfully matched */
  keywordMatches: string[];
  /** Important keywords that are missing from the resume */
  missingKeywords: string[];
  /** Feedback that is optional */
  feedback?: string;
}

/**
 * Complete analysis result containing all components of resume and job description analysis
 */
export interface AnalysisResult {
  /** ATS compatibility score and feedback */
  atsScore: ATSScore;
  /** Technical interview questions relevant to the role */
  technicalQuestions: InterviewQuestion[];
  /** Behavioral interview questions */
  behavioralQuestions: InterviewQuestion[];
  /** Suggested presentation topics for the interview */
  presentationTopics: PresentationTopic[];
  /** Questions the candidate should ask the interviewer */
  candidateQuestions: string[];
  /** Identified strengths of the candidate */
  strengths: string[];
  /** Areas where the candidate could improve */
  improvements: string[];
}

/**
 * Partial analysis result when only specific components are requested
 */
export interface PartialAnalysisResult extends Partial<AnalysisResult> {
  /** Components that were specifically requested by the user */
  requestedComponents: AnalysisComponent[];
  /** Components that are actually included in this result */
  includedComponents: AnalysisComponent[];
}
