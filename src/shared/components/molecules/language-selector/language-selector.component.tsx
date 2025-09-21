import React from "react";
import { useTranslation } from "react-i18next";
import { languageOptions } from "@/lib/i18n/languages";
import useLanguageSelector from "./hooks/use-language-selector";

export const LanguageSelector: React.FC = () => {
  const { t } = useTranslation("common");
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
          className="flex items-center gap-2 px-3 py-2 text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-not-allowed"
        >
          <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="w-12 h-4 bg-gray-300 rounded animate-pulse"></div>
          <span className="w-4 h-4 bg-gray-300 rounded animate-pulse"></span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen((oldOpen) => !oldOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={t("changeLanguage")}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{currentLanguageOption?.icon}</span>
        <span className="text-sm font-medium hidden sm:block">
          {currentLanguageOption?.nativeName}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-200 dark:border-gray-700">
              {t("selectLanguage")}
            </div>

            {languageOptions.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-150 ${
                  currentLanguage === language.code
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                role="option"
                aria-selected={currentLanguage === language.code}
              >
                <span className="text-base">{language.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">
                    {language.nativeName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {language.name}
                  </div>
                </div>
                {currentLanguage === language.code && (
                  <svg
                    className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
