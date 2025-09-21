import type { VariantProps } from "tailwind-variants";
import type { button } from "./button.styles";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof button> {}
