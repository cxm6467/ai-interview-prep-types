/**
 * Skill importance levels for job requirements
 */
export type SkillImportanceLevel = 'required' | 'preferred' | 'nice-to-have';

/**
 * Represents how well a candidate's skill matches a job requirement
 *
 * @example
 * ```typescript
 * const skillMatch: SkillMatch = {
 *   skill: "React",
 *   importance: "required",
 *   hasSkill: true
 * };
 * ```
 */
export interface SkillMatch {
  /** The name of the skill or technology being evaluated */
  skill: string;
  /** The importance level of this skill for the role */
  importance: SkillImportanceLevel;
  /** Whether the candidate has experience with this skill */
  hasSkill: boolean;
}

/**
 * Structured job description data extracted from job postings
 *
 * @example
 * ```typescript
 * const job: JobDescription = {
 *   title: "Senior Frontend Developer",
 *   company: "Tech Innovations Inc.",
 *   location: "San Francisco, CA",
 *   employmentType: "full-time",
 *   salaryRange: "$120,000 - $150,000",
 *   description: "We are seeking a skilled frontend developer...",
 *   requirements: ["5+ years React experience", "Strong JavaScript skills"],
 *   responsibilities: ["Build user interfaces", "Collaborate with design team"],
 *   preferredSkills: ["React", "JavaScript", "CSS"],
 *   experienceYears: 5
 * };
 * ```
 */
export interface JobDescription {
  /** The job title or position name */
  title: string;
  /** Name of the hiring company */
  company: string;
  /** Work location (optional, may be remote) */
  location?: string;
  /** Type of employment (full-time, part-time, contract, etc.) */
  employmentType?: string;
  /** Salary or compensation range if specified */
  salaryRange?: string;
  /** Detailed job overview and description */
  description: string;
  /** Array of mandatory qualifications and requirements */
  requirements: string[];
  /** Array of preferred but not required qualifications */
  preferredQualifications?: string[];
  /** Array of key job responsibilities and duties */
  responsibilities: string[];
  /** Array of preferred technical skills and technologies */
  preferredSkills: string[];
  /** Array of required technical skills and technologies */
  requiredSkills?: string[];
  /** Minimum years of relevant experience required */
  experienceYears?: number;
  /** Educational requirements or preferences */
  educationRequirements?: string[];
}
