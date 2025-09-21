import type { SelectHTMLAttributes, ReactNode } from "react";
import type { select } from "./select.styles";

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size" | "prefix" | "onChange"
  > {
  size?: keyof typeof select.variants.size;
  rounded?: keyof typeof select.variants.rounded;
  intent?: keyof typeof select.variants.intent;
  prefix?: ReactNode;
  suffix?: ReactNode;
  multiple?: boolean;
}
