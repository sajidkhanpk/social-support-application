import type { ReactNode } from "react";
import type { card } from "./card.styles";

export interface CardProps {
  title?: string;
  children: ReactNode;
  size?: keyof typeof card.variants.size;
  rounded?: keyof typeof card.variants.rounded;
  shadow?: keyof typeof card.variants.shadow;
  intent?: keyof typeof card.variants.intent;
  className?: string;
}
