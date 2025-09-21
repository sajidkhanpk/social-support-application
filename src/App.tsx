import React, { Suspense } from "react";
import { ThemeProvider } from "@shared/providers/theme-provider";
import { I18nProvider } from "@shared/providers/i18n-provider";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes/routes.tsx";
import { MultiStepFormSkeleton } from "./feature/support-application/components/application-skeleton/application-skeleton.component.tsx";

const AppRoutes = () => {
  return useRoutes(routes);
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<MultiStepFormSkeleton />}>
        <I18nProvider>
          <ThemeProvider>
            <AppRoutes />
          </ThemeProvider>
        </I18nProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
