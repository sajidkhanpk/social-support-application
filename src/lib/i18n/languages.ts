import type { LanguageOption } from "./types";

export const fallbackLng = "en";

export const languageOptions: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr",
    icon: "🇺🇸",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl",
    icon: "🇸🇦",
  },
];

export const getLanguageByCode = (code: string): LanguageOption | undefined => {
  return languageOptions.find((lang) => lang.code === code);
};

export const getLanguageName = (code: string): string => {
  return getLanguageByCode(code)?.name || code;
};

export const getNativeLanguageName = (code: string): string => {
  return getLanguageByCode(code)?.nativeName || code;
};
