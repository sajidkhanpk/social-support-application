import { useController, useFormContext } from "react-hook-form";
import type { FieldPath, FieldValues, Path } from "react-hook-form";
import { Input } from "@shared/components/atoms/input";
import { Typography } from "../../atoms/typography";

type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  resetOnChangeField?: FieldPath<T>;
  label?: string;
  type?: string;
  className?: string;
};

export function RHFTextField<T extends FieldValues>({ name, label, type = "text", className }: RHFTextFieldProps<T>) {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <label className={`block text-sm ${className}`}>
      {label && (
        <Typography variant="body2" as="span" className="block mb-1">
          {label}
        </Typography>
      )}
      <Input {...field} type={type} intent={error ? "error" : "default"} />
      {error && (
        <Typography variant="body2" color="error" className="mt-1">
          {error.message}
        </Typography>
      )}
    </label>
  );
}
