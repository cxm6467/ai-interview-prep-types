import { AnalysisComponent } from './enums';

export interface ATSScore {
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  keywordMatches: string[];
  missingKeywords: string[];
}

export interface Question {
  question: string;
  answer: string;
}

export interface PresentationTopic {
  topic: string;
  keyPoints: string[];
}

export interface AnalysisResult {
  atsScore: ATSScore;
  technicalQuestions: Question[];
  behavioralQuestions: Question[];
  presentationTopics: PresentationTopic[];
  candidateQuestions: string[];
  strengths: string[];
  improvements: string[];
}

export interface PartialAnalysisResult extends Partial<AnalysisResult> {
  requestedComponents: AnalysisComponent[];
  includedComponents: AnalysisComponent[];
}

export interface RequestBody {
  resumeText: string;
  jobDescription: string;
}
