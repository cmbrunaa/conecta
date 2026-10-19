export class Resume {
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

export type ResumeEducation = {
  id: string;
  course: string;
  institution: string;
  status: string;
  year: string;
};

export type ResumeCourse = {
  id: string;
  name: string;
  institution: string;
  year: string;
  link: string;
};

export type ResumeProject = {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
};