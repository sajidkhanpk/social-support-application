import type { ReactElement } from "react";
import { PATHS } from "../shared/constants/paths";
import { Pages } from "./pages";
import { HomeLayout } from "@/shared/components/templates/home-layout/home-layout.component";

export type AppRoute = {
  path: string;
  element: ReactElement;
  name?: string;
  children?: AppRoute[];
};

export const routes: AppRoute[] = [
  {
    path: PATHS.HOME,
    element: <HomeLayout />,
    children: [{ path: "", element: <Pages.Home /> }],
  },
];
