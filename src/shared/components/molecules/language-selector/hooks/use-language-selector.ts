import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/shared/hooks/use-i18-context";
import { languageOptions } from "@/lib/i18n/languages";

function useLanguageSelector() {
  const { currentLanguage, setLanguage, isInitialized } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguageOption = languageOptions.find(
    (lang) => lang.code === currentLanguage
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as any);
    setIsOpen(false);
  };

  return {
    isOpen,
    currentLanguage,
    currentLanguageOption,
    isInitialized,
    dropdownRef,
    setIsOpen,
    handleLanguageChange,
  };
}

export default useLanguageSelector;
