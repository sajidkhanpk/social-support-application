import type { FC } from "react";
import type { CardProps } from "./card.types";
import { card } from "./card.styles";
import { Typography } from "../../atoms/typography";

export const Card: FC<CardProps> = ({
  title,
  children,
  size,
  rounded,
  shadow,
  intent,
  className,
}) => {
  return (
    <div className={card({ size, rounded, shadow, intent, className })}>
      {title && (
        <Typography as="h3" variant="h4" className="mb-4">
          {title}
        </Typography>
      )}
      {children}
    </div>
  );
};
