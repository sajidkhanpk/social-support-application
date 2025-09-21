export type Language = "en" | "ar";
export type Namespace = "common" | "app" | "theme" | "forms";

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  icon: string;
}
