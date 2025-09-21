import { z } from "zod";

export function createSituationDescriptionSchema(
  t: (key: string, options?: any) => string
) {
  const descriptionSchema = z
    .string(t("validations:required"))
    .trim()
    .min(50, t("validations:string_too_small", { min: 50 }))
    .max(1000, t("validations:string_too_big", { min: 1000 }));

  return z.object({
    currentFinancialSituation: descriptionSchema,
    employmentCircumstances: descriptionSchema,
    reasonForApplying: descriptionSchema,
  });
}
