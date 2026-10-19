
import type { ResumeData } from "../../pages/Resume/Resume";

export type GenerateResumeResponse = {
  professionalSummary: string;
};

const API_URL =
  import.meta.env.VITE_API_URL ??
  "http://localhost:3000";

export async function generateResumeWithAI(
  data: ResumeData
): Promise<GenerateResumeResponse> {
  const response = await fetch(
    `${API_URL}/resume/generate`,
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
