// components/molecules/RHFDateField.tsx
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";
import { DateField } from "@shared/components/atoms/date";
import { Typography } from "../../atoms/typography";

type RHFDateFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "full";
  intent?: "default" | "primary" | "success" | "error";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  className?: string;
};

export function RHFDateField<T extends FieldValues>({ name, label, size = "md", rounded = "md", intent = "default", prefix, suffix, className, ...props }: RHFDateFieldProps<T>) {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <label className="block text-sm w-full">
      {label && (
        <Typography variant="body2" as="span" className="block mb-1">
          {label}
        </Typography>
      )}
      <DateField {...field} {...props} size={size} rounded={rounded} prefix={prefix} suffix={suffix} intent={error ? "error" : intent} className={className} />

      {error && (
        <Typography variant="body2" color="error" className="mt-1">
          {error.message}
        </Typography>
      )}
    </label>
  );
}
