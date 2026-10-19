import "./ResumeForm.css";

import type { ResumeData } from "../../../../pages/Resume/Resume";

import { ResumePersonalData } from "../ResumePersonalData/ResumePersonalData";
import { ResumeEducation } from "../ResumeEducation/ResumeEducation";
import { ResumeSkills } from "../ResumeSkills/ResumeSkills";
import { ResumeProjects } from "../ResumeProjects/ResumeProjects";
import { ResumeCourses } from "../ResumeCourses/ResumeCourses";
import { ResumeReview } from "../ResumeReview/ResumeReview";

type ResumeFormProps = {
  data: ResumeData;
  onChange: React.Dispatch<React.SetStateAction<ResumeData>>;
  currentStep: number;
  onNext: () => void;
  onPrevious: () => void;
  onStepChange: (step: number) => void;
  onGenerate: () => void | Promise<void>;
  isGenerating: boolean;
};

export function ResumeForm({
  data,
  onChange,
  currentStep,
  onNext,
  onPrevious,
  onStepChange,
  onGenerate,
  isGenerating,
}: ResumeFormProps) {
  if (currentStep === 1) {
    return (
      <ResumePersonalData
        data={data}
        onChange={onChange}
        onNext={onNext}
      />
    );
  }

  if (currentStep === 2) {
    return (
      <ResumeEducation
        data={data}
        onChange={onChange}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  }

  if (currentStep === 3) {
    return (
      <ResumeSkills
        data={data}
        onChange={onChange}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  }

  if (currentStep === 4) {
    return (
      <ResumeProjects
        data={data}
        onChange={onChange}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  }

  if (currentStep === 5) {
    return (
      <ResumeCourses
        data={data}
        onChange={onChange}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  }

  if (currentStep === 6) {
    return (
      <ResumeReview
        data={data}
        onPrevious={onPrevious}
        onEditStep={onStepChange}
        onGenerate={onGenerate}
        isGenerating={isGenerating}
      />
    );
  }

  return null;
}
