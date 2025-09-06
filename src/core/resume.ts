/**
 * Individual work experience entry from a resume
 *
 * @example
 * ```typescript
 * const experience: ExperienceItem = {
 *   company: "Tech Corp",
 *   position: "Senior Developer",
 *   duration: "2020-2023",
 *   description: ["Built scalable web applications", "Led team of 5 developers"]
 * };
 * ```
 */
export interface ExperienceItem {
  /** Company name where the candidate worked */
  company: string;
  /** Job title/position held by the candidate */
  position: string;
  /** Duration of employment (e.g., "2020-2023", "Jan 2020 - Present") */
  duration: string;
  /** Array of job responsibilities and achievements */
  description: string[];
}

/**
 * Individual education entry from a resume
 *
 * @example
 * ```typescript
 * const education: EducationItem = {
 *   school: "University of Technology",
 *   degree: "Bachelor of Science in Computer Science",
 *   year: "2020"
 * };
 * ```
 */
export interface EducationItem {
  /** Name of the educational institution */
  school: string;
  /** Degree type and field of study (e.g., "B.S. Computer Science", "Master of Engineering") */
  degree: string;
  /** Graduation year or expected graduation date */
  year: string;
}

/**
 * Structured resume data extracted from resume text
 *
 * @example
 * ```typescript
 * const resume: ResumeData = {
 *   name: "John Doe",
 *   email: "john.doe@email.com",
 *   phone: "+1-555-0123",
 *   summary: "Experienced software developer with 5+ years in web development",
 *   experience: [experienceItem],
 *   education: [educationItem],
 *   skills: ["JavaScript", "TypeScript", "React"],
 *   certifications: ["AWS Certified Developer"]
 * };
 * ```
 */
export interface ResumeData {
  /** Candidate's full name as it appears on the resume */
  name?: string;
  /** Primary contact email address */
  email?: string;
  /** Contact phone number (optional) */
  phone?: string;
  /** Professional summary, objective, or profile statement (optional) */
  summary?: string;
  /** Array of work experience entries in chronological order */
  experience: ExperienceItem[];
  /** Array of educational background entries */
  education: EducationItem[];
  /** Array of technical and professional skills */
  skills: string[];
  /** Array of professional certifications (optional) */
  certifications?: string[];
}
