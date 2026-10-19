export interface IAIService {
  generateProfessionalSummary(data: {
    fullName: string;
    educations: {
      course: string;
      institution: string;
      status: string;
      year: string;
    }[];
    skills: string[];
    projects: {
      name: string;
      description: string;
      technologies: string;
    }[];
    courses: {
      name: string;
      institution: string;
      year: string;
    }[];
  }): Promise<string>;
}