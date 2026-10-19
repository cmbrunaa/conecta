import "./ResumeSteps.css";

type ResumeStepsProps = {
  currentStep: number;
  onStepChange: (step: number) => void;
};

const steps = [
  "Seus dados",
  "Formação",
  "Habilidades",
  "Projetos",
  "Cursos",
  "Revisar",
];

export function ResumeSteps({
  currentStep,
  onStepChange,
}: ResumeStepsProps) {
  return (
    <div className="resume-steps">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isActive =
          stepNumber === currentStep;

        const isCompleted =
          stepNumber < currentStep;

        const isClickable =
          stepNumber <= currentStep;

        return (
          <div
            className={`resume-steps__item ${
              isActive
                ? "resume-steps__item--active"
                : ""
            } ${
              isCompleted
                ? "resume-steps__item--completed"
                : ""
            }`}
            key={step}
          >
            <button
              type="button"
              className="resume-steps__button"
              onClick={() =>
                isClickable &&
                onStepChange(stepNumber)
              }
              disabled={!isClickable}
              aria-current={
                isActive ? "step" : undefined
              }
            >
              <span className="resume-steps__number">
                {String(stepNumber).padStart(2, "0")}
              </span>

              <span className="resume-steps__label">
                {step}
              </span>
            </button>

            {index < steps.length - 1 && (
              <span
                className="resume-steps__line"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}