import type {
  ResumeCourse,
  ResumeEducation,
  ResumeProject,
} from "../../../Domain/Entities/Resume/Resume.js";

export class GenerateResumeDto {
  fullName: string;
  email: string;
  phone: string;
  city: string;

  linkedin: string;
  github: string;
  portfolio: string;

  educations: ResumeEducation[];
  courses: ResumeCourse[];

  skills: string[];
  projects: ResumeProject[];

  professionalSummary: string;
}