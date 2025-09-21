import { createContext } from "react";
import type { Language, LanguageOption } from "../../lib/i18n/types";

interface I18nContextType {
  isInitialized: boolean;
  currentLanguage: Language;
  languageDir: "ltr" | "rtl";
  setLanguage: (language: Language) => void;
  languageOptions: LanguageOption[];
}

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);
