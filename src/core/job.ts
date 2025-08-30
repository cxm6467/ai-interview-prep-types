/**
 * Represents how well a candidate's skill matches a job requirement
 */
export interface SkillMatch {
  /** The skill or technology name */
  skill: string;
  /** Whether this skill is required or preferred */
  importance: 'required' | 'preferred' | 'nice-to-have';
  /** How well the candidate matches this skill (0-100) */
  matchScore: number;
  /** Whether the candidate has experience with this skill */
  candidateHasSkill: boolean;
  /** Years of experience the candidate has with this skill */
  yearsExperience?: number;
}

/**
 * Structured job description data
 */
export interface JobDescription {
  /** Job title */
  title: string;
  /** Company name */
  company: string;
  /** Job location */
  location?: string;
  /** Employment type (full-time, part-time, contract, etc.) */
  employmentType?: string;
  /** Salary range if provided */
  salaryRange?: string;
  /** Job overview and description */
  description: string;
  /** List of required qualifications */
  requirements: string[];
  /** List of preferred qualifications */
  preferredQualifications?: string[];
  /** List of responsibilities */
  responsibilities: string[];
  /** Required technical skills */
  requiredSkills: string[];
  /** Preferred technical skills */
  preferredSkills?: string[];
  /** Years of experience required */
  experienceYears?: number;
  /** Education requirements */
  educationRequirements?: string[];
}
