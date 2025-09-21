import { useTranslation } from "react-i18next";
import { ResponsiveLanguageSelector } from "@shared/components/molecules/language-selector/responsive-language-selector";
import { ThemeToggle } from "@shared/components/molecules/theme-toggle/theme-toggle.component";
import { Typography } from "@shared/components/atoms/typography";

function Header() {
  const { t } = useTranslation("app", { useSuspense: true });

  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-2">
      <div className="order-1 md:order-0 self-start">
        <Typography variant="h3" as="h1">
          {t("title")}
        </Typography>
        <Typography variant="body2" as="span">
          {t("description")}
        </Typography>
      </div>
      <div className="flex items-center self-end gap-3 order-0 md:order-1">
        <ResponsiveLanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
