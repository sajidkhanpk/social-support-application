import type { SupportApplicationFormValues } from "@/feature/support-application/support-application-form.types";
import { FieldWithAI } from "../../components/field-with-ai/field-with-ai.component";
import { useTranslation } from "react-i18next";

export const SituationDescriptionStep: React.FC = () => {
  const { t } = useTranslation(["support-application", "common"], {
    useSuspense: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <FieldWithAI<SupportApplicationFormValues>
        name="currentFinancialSituation"
        label={t("form.current_financial_situation")}
        placeholder={t("form.descritbe_situation")}
      />
      <FieldWithAI<SupportApplicationFormValues>
        name="employmentCircumstances"
        label={t("form.employment_circumstances")}
        placeholder={t("form.descritbe_situation")}
      />
      <FieldWithAI<SupportApplicationFormValues>
        name="reasonForApplying"
        label={t("form.reason_for_applying")}
        placeholder={t("form.descritbe_situation")}
      />
    </div>
  );
};
