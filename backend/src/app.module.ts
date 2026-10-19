import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { ResumeController } from "./Api/Controllers/resume.controller.js";
import { ResumeService } from "./Application/Services/Resume/ResumeService.js";
import { AIService } from "./Infrastructure/AI/AIService.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    ResumeController,
  ],
  providers: [
    AppService,
    ResumeService,
    AIService,
    {
      provide: "IAIService",
      useExisting: AIService,
    },
  ],
})
export class AppModule {}