import { input } from "./multiline-input.styles";
import type { MultilineInputProps } from "./multiline-input.types";

export const MultilineInput = ({
  intent,
  className,
  ...props
}: MultilineInputProps) => {
  return <textarea className={input({ intent, className })} {...props} />;
};
