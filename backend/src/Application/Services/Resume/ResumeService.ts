import { Inject, Injectable } from "@nestjs/common";

import { GenerateResumeDto } from "../../DTOs/Resume/GenerateResumeDto.js";
import type { IAIService } from "../../Interfaces/AI/IAIService.js";

@Injectable()
export class ResumeService {
  constructor(
    @Inject("IAIService")
    private readonly aiService: IAIService,
  ) {}

  async generateResume(data: GenerateResumeDto) {
    const professionalSummary =
      await this.aiService.generateProfessionalSummary({
        fullName: data.fullName,
        educations: data.educations,
        skills: data.skills,
        projects: data.projects,
        courses: data.courses,
      });

    return {
      professionalSummary,
    };
  }
}