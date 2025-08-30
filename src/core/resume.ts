/**
 * Individual work experience entry from a resume
 */
export interface ExperienceItem {
  /** Company name */
  company: string;
  /** Job title/position */
  title: string;
  /** Start date */
  startDate: string;
  /** End date (null if current position) */
  endDate: string | null;
  /** Job description and responsibilities */
  description: string;
  /** Technologies, skills, or keywords associated with this role */
  skills: string[];
}

/**
 * Individual education entry from a resume
 */
export interface EducationItem {
  /** Institution name */
  institution: string;
  /** Degree type and field of study */
  degree: string;
  /** Graduation date */
  graduationDate: string;
  /** GPA if provided */
  gpa?: number;
  /** Relevant coursework or achievements */
  coursework?: string[];
}

/**
 * Structured resume data extracted from resume text
 */
export interface ResumeData {
  /** Candidate's full name */
  name: string;
  /** Contact email */
  email: string;
  /** Phone number */
  phone?: string;
  /** Professional summary or objective */
  summary?: string;
  /** List of work experiences */
  experience: ExperienceItem[];
  /** List of educational background */
  education: EducationItem[];
  /** List of skills and technologies */
  skills: string[];
  /** List of certifications */
  certifications?: string[];
}
