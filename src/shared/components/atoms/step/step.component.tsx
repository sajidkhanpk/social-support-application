// components/Step.tsx
import React from "react";
import type { StepProps } from "./step.types";
import { stepCircle, stepLabel } from "./step.styles";

const Step: React.FC<StepProps> = ({
  index,
  label,
  isActive,
  isCompleted,
  onClick,
}) => {
  const state = isActive ? "active" : isCompleted ? "completed" : "upcoming";

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-current={isActive ? "step" : undefined}
      aria-disabled={!isCompleted && !isActive}
    >
      <div className={stepCircle({ state })}>
        {isCompleted ? "✓" : index + 1}
      </div>
      <span className={stepLabel({ state })}>{label}</span>
    </button>
  );
};

export default Step;
