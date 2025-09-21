import React from "react";
import Step from "@shared/components/atoms/step/step.component";

interface StepperProps {
  steps: string[];
  currentStep: number;
  completedSteps: number[];
  onStepClick?: (step: number) => void;
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, completedSteps, className, onStepClick }) => {
  return (
    <nav aria-label="Progress" className={`flex items-center justify-between w-full mb-6 ${className}`}>
      {steps.map((label, index) => (
        <Step
          key={index}
          index={index}
          label={label}
          isActive={index === currentStep}
          isCompleted={completedSteps.includes(index)}
          onClick={() => {
            const completedStepSet = new Set(completedSteps);

            if (
              onStepClick &&
              (completedStepSet.has(index) ||
                //If previous step is complete
                completedStepSet.has(Number(index) - 1) ||
                index === currentStep)
            ) {
              onStepClick(index);
            }
          }}
        />
      ))}
    </nav>
  );
};

export default Stepper;
