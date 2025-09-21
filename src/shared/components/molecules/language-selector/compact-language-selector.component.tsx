import React from "react";
import { languageOptions } from "@/lib/i18n/languages";
import useLanguageSelector from "./hooks/use-language-selector";
import { Typography } from "../../atoms/typography";

export const CompactLanguageSelector: React.FC = () => {
  const {
    isOpen,
    currentLanguage,
    currentLanguageOption,
    isInitialized,
    dropdownRef,
    setIsOpen,
    handleLanguageChange,
  } = useLanguageSelector();

  if (!isInitialized) {
    return (
      // Skeleton
      <div className="relative">
        <button
          disabled
          className="w-10 h-10 bg-gray-300 rounded-full animate-pulse cursor-not-allowed"
        ></button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Change language"
      >
        <Typography variant="body2" as="span">
          {currentLanguageOption?.icon}
        </Typography>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            {languageOptions.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 transition-colors duration-150 ${
                  currentLanguage === language.code
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Typography variant="body2" as="span">
                  {language.icon}
                </Typography>
                <Typography variant="body2" as="span">
                  <strong>{language.code.toUpperCase()}</strong>
                </Typography>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
