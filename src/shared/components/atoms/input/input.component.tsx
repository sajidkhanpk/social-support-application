import { input } from "./input.styles";
import type { InputProps } from "./input.types";

export const Input = ({ intent, className, ...props }: InputProps) => {
  return <input className={input({ intent, className })} {...props} />;
};
