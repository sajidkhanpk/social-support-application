import { RHFSelect } from "@/shared/components/molecules/rhf-select/rhf-select.component";
import { RHFTextField } from "@/shared/components/molecules/rhf-text-field/rhf-text-field.component";
import type { SupportApplicationFormValues } from "@/feature/support-application/support-application-form.types";
import {
  employmentStatusOptions,
  housingStatusOptions,
  maritalStatusOptions,
} from "@/feature/support-application/lib/constants";
import { useTranslation } from "react-i18next";

export const FamilyAndFinancialSupportStep: React.FC = () => {
  const { t } = useTranslation("support-application", {
    useSuspense: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <RHFSelect<SupportApplicationFormValues>
        name="maritalStatus"
        label={t("form.marital_status")}
      >
        <option value="" disabled>
          {t("form.select_marital_status")}
        </option>
        {maritalStatusOptions.map((status) => (
          <option key={status.value} value={status.value}>
            {t(status.label)}
          </option>
        ))}
      </RHFSelect>
      <RHFTextField<SupportApplicationFormValues>
        type="number"
        name="dependents"
        label={t("form.dependents")}
      />
      <RHFSelect<SupportApplicationFormValues>
        name="employmentStatus"
        label={t("form.employment_status")}
      >
        <option value="" disabled>
          {t("form.select_employment_status")}
        </option>
        {employmentStatusOptions.map((status) => (
          <option key={status.value} value={status.value}>
            {t(status.label)}
          </option>
        ))}
      </RHFSelect>
      <RHFTextField<SupportApplicationFormValues>
        type="number"
        name="monthlyIncome"
        label={t("form.monthly_income")}
      />
      <RHFSelect<SupportApplicationFormValues>
        name="housingStatus"
        label={t("form.housing_status")}
      >
        <option value="" disabled>
          {t("form.select_housing_status")}
        </option>
        {housingStatusOptions.map((status) => (
          <option key={status.value} value={status.value}>
            {t(status.label)}
          </option>
        ))}
      </RHFSelect>
    </div>
  );
};
