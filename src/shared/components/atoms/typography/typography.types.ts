import type { ElementType, HTMLAttributes } from "react";
import { typography } from "./typography.styles";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: keyof typeof typography.variants.variant;
  color?: keyof typeof typography.variants.color;
  align?: keyof typeof typography.variants.align;
  as?: ElementType;
};
