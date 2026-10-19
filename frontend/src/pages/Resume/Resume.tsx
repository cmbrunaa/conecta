import { useState } from "react";

import { ResumeHeader } from "../../components/sections/Resume/ResumeHeader/ResumeHeader";
import { ResumeIntro } from "../../components/sections/Resume/ResumeIntro/ResumeIntro";
import { ResumeSteps } from "../../components/sections/Resume/ResumeSteps/ResumeSteps";
import { ResumeForm } from "../../components/sections/Resume/ResumeForm/ResumeForm";
import { ResumePreview } from "../../components/sections/Resume/ResumePreview/ResumePreview";

import { generateResumeWithAI } from "../../services/resume/resumeAI";

import "./Resume.css";

export type ResumeProject = {
  id: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
};

export type ResumeCourse = {
  id: string;
  name: string;
  institution: string;
  year: string;
  link: string;
};

export type ResumeEducation = {
  id: string;
  course: string;
  institution: string;
  status: string;
  year: string;
};

export type ResumeData = {
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
};

export function Resume() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    fullName: "",
    email: "",
    phone: "",
    city: "",

    linkedin: "",
    github: "",
    portfolio: "",

    educations: [],
    courses: [],

    skills: [],
    projects: [],

    professionalSummary: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const [isGenerating, setIsGenerating] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((current) => Math.min(current + 1, 6));
  };

  const handlePreviousStep = () => {
    setCurrentStep((current) => Math.max(current - 1, 1));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      const result = await generateResumeWithAI(resumeData);

      setResumeData((current) => ({
        ...current,
        professionalSummary: result.professionalSummary,
      }));

      setCurrentStep(6);
    } catch (error) {
      console.error("Erro ao gerar currículo:", error);

      alert("Não foi possível gerar o currículo. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="resume-page">
      <ResumeHeader />

      <main className="resume-page__main">
        <div className="resume-page__container">
          <ResumeIntro />

          <ResumeSteps
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />

          <div className="resume-page__workspace">
            <ResumeForm
              data={resumeData}
              onChange={setResumeData}
              currentStep={currentStep}
              onNext={handleNextStep}
              onPrevious={handlePreviousStep}
              onStepChange={setCurrentStep}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />

            <ResumePreview data={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
}
