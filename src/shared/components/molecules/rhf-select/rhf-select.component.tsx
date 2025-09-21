// components/molecules/RHFSelect.tsx
import React, { type ReactNode } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";
import { Select } from "@shared/components/atoms/select";
import { Typography } from "../../atoms/typography";

type RHFSelectProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  multiple?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "full";
  intent?: "default" | "primary" | "success" | "error";
  children: React.ReactNode;
};

export function RHFSelect<T extends FieldValues>({
  name,
  label,
  prefix,
  suffix,
  multiple = false,
  className,
  size = "md",
  rounded = "md",
  intent = "default",
  children,
}: RHFSelectProps<T>) {
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
      <Select
        {...field}
        multiple={multiple}
        prefix={prefix}
        suffix={suffix}
        className={className}
        size={size}
        rounded={rounded}
        intent={error ? "error" : intent}
      >
        {children}
      </Select>

      {error && (
        <Typography variant="body2" color="error" className="mt-1">
          {error.message}
        </Typography>
      )}
    </label>
  );
}
