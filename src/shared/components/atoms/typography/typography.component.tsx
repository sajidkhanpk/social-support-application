import type { FC } from "react";
import { typography } from "./typography.styles";
import type { TypographyProps } from "./typography.types";

export const Typography: FC<TypographyProps> = ({
  variant,
  color,
  align,
  as: Component = "p",
  className,
  ...props
}) => {
  return (
    <Component
      className={typography({ variant, color, align, className })}
      {...props}
    />
  );
};
