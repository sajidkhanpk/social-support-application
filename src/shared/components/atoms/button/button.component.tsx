import React from "react";
import { button } from "./button.styles";
import type { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  className,
  ...props
}) => {
  return (
    <button
      className={button({ variant, size, color, className })}
      {...props}
    />
  );
};
