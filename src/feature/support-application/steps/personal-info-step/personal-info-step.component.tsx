import { RHFDateField } from "@/shared/components/molecules/rhf-date-field/rhf-date-field.component";
import { RHFSelect } from "@/shared/components/molecules/rhf-select/rhf-select.component";
import { RHFTextField } from "@/shared/components/molecules/rhf-text-field/rhf-text-field.component";
import type { SupportApplicationFormValues } from "../../support-application-form.types";
import { genderOptions } from "../../lib/constants";
import { useTranslation } from "react-i18next";
import { RHFInternationalPhoneInput } from "@/shared/components/molecules/rhf-phone-number-input/rhf-phone-number-input.component";
import RHFCountrySelect from "../../components/country-select/country-select.component";

export const PersonalInformationStep: React.FC = () => {
  const { t } = useTranslation("support-application", {
    useSuspense: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <RHFTextField<SupportApplicationFormValues> name="name" label={t("form.first_name")} />
      <RHFTextField<SupportApplicationFormValues> name="nationalId" label={t("form.national_id")} />
      <RHFDateField<SupportApplicationFormValues> name="dateOfBirth" label={t("form.dob")} />
      <RHFSelect<SupportApplicationFormValues> name="gender" label={t("form.gender")}>
        <option value="" disabled>
          {t("form.select_gender")}
        </option>
        {genderOptions.map((gender) => (
          <option key={gender.value} value={gender.value}>
            {t(gender.label)}
          </option>
        ))}
      </RHFSelect>
      <RHFCountrySelect<SupportApplicationFormValues> name="country" />
      {/* Logic to keep state and city fields locked while the user selects a country */}
      {/* <WatchField<SupportApplicationFormValues> name="country">
        {(data) => {
          return <RHFTextField<SupportApplicationFormValues> name="state" label={t("form.state")} />;
        }}
      </WatchField> */}

      <RHFTextField<SupportApplicationFormValues> name="state" label={t("form.state")} />
      <RHFTextField<SupportApplicationFormValues> name="city" label={t("form.city")} />
      <RHFTextField<SupportApplicationFormValues> name="address" label={t("form.address")} />
      <RHFInternationalPhoneInput<SupportApplicationFormValues> name="phone" defaultCountry="us" label={t("form.phone")} placeholder={t("form.phone_placeholder")} />

      <RHFTextField<SupportApplicationFormValues> name="email" label={t("form.email")} type="email" />
    </div>
  );
};
