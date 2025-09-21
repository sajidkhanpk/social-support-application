import type { ReactNode } from "react";

export type AppRoute = {
  path: string;
  element: ReactNode;
  name?: string;
  children?: AppRoute[];
};
