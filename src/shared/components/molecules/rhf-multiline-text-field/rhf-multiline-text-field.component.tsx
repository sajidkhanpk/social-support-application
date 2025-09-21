import { useController, useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";
import { MultilineInput } from "../../atoms/multiline-input";
import { Typography } from "../../atoms/typography";

type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
};

export function RHFTMultilineTextField<T extends FieldValues>({ name, label, placeholder, className }: RHFTextFieldProps<T>) {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <label className={`block text-sm ${className}`}>
      {label && (
        <Typography variant="body2" as="span" className="block mb-2">
          {label}
        </Typography>
      )}
      <MultilineInput {...field} placeholder={placeholder} intent={error ? "error" : "default"} rows={6} />
      {error && (
        <Typography variant="body2" color="error" className="mt-1">
          {error.message}
        </Typography>
      )}
    </label>
  );
}
