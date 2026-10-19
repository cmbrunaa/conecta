import { Body, Controller, Post } from "@nestjs/common";

import { GenerateResumeDto } from "../../Application/DTOs/Resume/GenerateResumeDto.js";
import { ResumeService } from "../../Application/Services/Resume/ResumeService.js";

@Controller("resume")
export class ResumeController {
  constructor(
    private readonly resumeService: ResumeService,
  ) {}

  @Post("generate")
  async generate(@Body() data: GenerateResumeDto) {
    return this.resumeService.generateResume(data);
  }
}