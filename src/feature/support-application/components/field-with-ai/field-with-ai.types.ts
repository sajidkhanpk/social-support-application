import type { FieldValues, Path } from "react-hook-form";

export type FieldWithAIProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  placeholder?: string;
  buttonLabel?: string;
};
