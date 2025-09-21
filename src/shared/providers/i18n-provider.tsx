import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { Language } from "../../lib/i18n/types";
import { I18nContext } from "../contexts/i18n-context";
import { languageOptions } from "@/lib/i18n/languages";

interface I18nProviderProps {
  children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(i18n.isInitialized);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    i18n.language as Language
  );

  useEffect(() => {
    const handleInitialized = () => {
      setIsInitialized(true);
      setCurrentLanguage(i18n.language as Language);
      document.documentElement.dir = i18n.dir(i18n.language);
    };

    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng as Language);
      document.documentElement.dir = i18n.dir(lng);
      document.documentElement.lang = lng;
    };

    if (i18n.isInitialized) {
      handleInitialized();
    } else {
      i18n.on("initialized", handleInitialized);
    }

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("initialized", handleInitialized);
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const setLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const languageDir = i18n.dir(currentLanguage) as "ltr" | "rtl";

  return (
    <I18nContext.Provider
      value={{
        isInitialized,
        currentLanguage,
        languageDir,
        setLanguage,
        languageOptions,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
