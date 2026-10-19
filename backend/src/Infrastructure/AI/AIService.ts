import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { GoogleGenAI } from "@google/genai";

import type { IAIService } from "../../Application/Interfaces/AI/IAIService.js";

@Injectable()
export class AIService implements IAIService {
  private readonly ai: GoogleGenAI;

  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "A variável GEMINI_API_KEY não foi configurada no arquivo .env.",
      );
    }

    this.ai = new GoogleGenAI({ apiKey });
  }

  async generateProfessionalSummary(data: {
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
  }): Promise<string> {
    const educations = data.educations.filter(
      (item) =>
        item.course.trim() ||
        item.institution.trim() ||
        item.status.trim(),
    );

    const skills = [
      ...new Set(data.skills.map((skill) => skill.trim()).filter(Boolean)),
    ];

    const projects = data.projects.filter(
      (project) =>
        project.name.trim() ||
        project.description.trim() ||
        project.technologies.trim(),
    );

    const courses = data.courses.filter(
      (course) =>
        course.name.trim() ||
        course.institution.trim(),
    );

    if (
      educations.length === 0 &&
      skills.length === 0 &&
      projects.length === 0 &&
      courses.length === 0
    ) {
      return "Preencha sua formação, habilidades, projetos ou cursos para gerar um perfil profissional personalizado.";
    }

    const prompt = `
Você é um assistente especializado em currículos profissionais brasileiros.

Escreva um resumo profissional para uma pessoa em início de carreira.
Use português brasileiro, tom profissional, natural e objetivo.
Escreva um único parágrafo de 50 a 90 palavras.

REGRAS OBRIGATÓRIAS:
- Use somente informações presentes nos dados fornecidos.
- Respeite rigorosamente o status informado em cada formação.
- Se o status for "Concluído", informe que a formação foi concluída.
- Se o status for "Cursando", informe que a pessoa está cursando a formação.
- Nunca contradiga o status informado nem deduza outro status pela data.
- Se o status estiver ausente ou ambíguo, não afirme que a formação foi concluída ou está em andamento.
- Não invente experiências profissionais, resultados ou competências.
- Diferencie projetos pessoais ou acadêmicos de experiência profissional.
- Valorize formação, habilidades, projetos e cursos relevantes.
- Não inclua nome, telefone, e-mail ou outros dados pessoais.
- Não use títulos, listas, aspas ou comentários.
- Se houver poucos dados, escreva um resumo mais curto.

DADOS DO CURRÍCULO:

Formação:
${JSON.stringify(educations)}

Habilidades:
${JSON.stringify(skills)}

Projetos:
${JSON.stringify(projects)}

Cursos:
${JSON.stringify(courses)}

Gere somente o resumo profissional.
`;

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
        config: {
          temperature: 0.4,
          maxOutputTokens: 220,
        },
      });

      const summary = response.text?.trim();

      if (!summary) {
        throw new Error("A Gemini API não retornou um resumo.");
      }

      return summary;
    } catch (error) {
      console.error(
        "Erro ao gerar resumo profissional com a Gemini API:",
        error instanceof Error ? error.message : "Erro desconhecido",
      );

      throw new InternalServerErrorException(
        "Não foi possível gerar o resumo profissional. Tente novamente.",
      );
    }
  }
}