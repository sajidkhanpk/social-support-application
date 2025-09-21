import i18n from "@/lib/i18n/i18n";
import { createFamilyAndFinancialInfoSchema } from "../steps/family-and-financial-info-step/family-and-financial-info-step.schema";
import { EmploymentStatus, HousingStatus, MaritalStatus } from "../steps/family-and-financial-info-step/family-and-financial-info-step.types";
import { createPersonalInformationSchema } from "../steps/personal-info-step/personal-info-step.schema";
import { Gender } from "../steps/personal-info-step/personal-info-step.types";
import { createSituationDescriptionSchema } from "../steps/situation-description/situation-description-step.schema";
import type { Country, SupportApplicationFormValues } from "../support-application-form.types";

export const steps = ["steps.personal_info", "steps.family_and_financial_info", "steps.situation_description"];

export const APPLICATION_STORAGE_KEY = "support_application";
export const APPLICATION_STEP_STORAGE_KEY = "step";

export const genderOptions = [
  { label: "form.gender_options.male", value: Gender.MALE },
  { label: "form.gender_options.female", value: Gender.FEMALE },
];

export const maritalStatusOptions = [
  {
    label: "form.marital_status_options.married",
    value: MaritalStatus.MARRIED,
  },
  { label: "form.marital_status_options.single", value: MaritalStatus.SINGLE },
];

export const employmentStatusOptions = [
  {
    label: "form.employment_status_options.employed",
    value: EmploymentStatus.EMPLOYED,
  },
  {
    label: "form.employment_status_options.unemployed",
    value: EmploymentStatus.UNEMPLOYED,
  },
];

export const housingStatusOptions = [
  {
    label: "form.housing_status_options.home_owner",
    value: HousingStatus.HOMEOWNER,
  },
  {
    label: "form.housing_status_options.renter",
    value: HousingStatus.RENTER,
  },
  {
    label: "form.housing_status_options.living_with_family",
    value: HousingStatus.LIVING_WITH_FAMILY,
  },
  {
    label: "form.housing_status_options.homeless",
    value: HousingStatus.HOMELESS,
  },
  {
    label: "form.housing_status_options.temporary_housing",
    value: HousingStatus.TEMPORARY_HOUSING,
  },
  { label: "form.housing_status_options.other", value: HousingStatus.OTHER },
];

export const stepSchemas = [createPersonalInformationSchema(i18n.t), createFamilyAndFinancialInfoSchema(i18n.t), createSituationDescriptionSchema(i18n.t)];

export const SUPPORT_APPLICATION_FORM_DEFAULT_VALUES: SupportApplicationFormValues = {
  name: "",
  nationalId: "",
  dateOfBirth: "",
  email: "",
  gender: "" as Gender,
  phone: "",
  country: null as unknown as Country,
  state: "",
  city: "",
  address: "",
  maritalStatus: "" as MaritalStatus,
  employmentStatus: "" as EmploymentStatus,
  housingStatus: "" as HousingStatus,
  dependents: "",
  monthlyIncome: "",
  currentFinancialSituation: "",
  employmentCircumstances: "",
  reasonForApplying: "",
};
