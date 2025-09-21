export interface StepProps {
  index: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  onClick?: () => void;
}
