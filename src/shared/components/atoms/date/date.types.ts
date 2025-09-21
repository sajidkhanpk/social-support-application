import type { InputHTMLAttributes } from "react";

export interface DateFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "onChange"
  > {
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "full";
  intent?: "default" | "primary" | "success" | "error";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}
