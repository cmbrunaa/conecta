import type { ResumeData } from "../../pages/Resume/Resume";

export type GenerateResumeResponse = {
  professionalSummary: string;
};

export async function generateResumeWithAI(
  data: ResumeData
): Promise<GenerateResumeResponse> {
  const response = await fetch(
    "http://localhost:3000/resume/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Não foi possível gerar o currículo."
    );
  }

  return response.json();
}