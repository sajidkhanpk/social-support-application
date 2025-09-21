import { z } from "zod";
import {
  EmploymentStatus,
  HousingStatus,
  MaritalStatus,
} from "./family-and-financial-info-step.types";

export function createFamilyAndFinancialInfoSchema(
  t: (key: string, options?: any) => string
) {
  const numberFieldSchema = z
    .string()
    .trim()
    .refine((val) => !isNaN(Number(val)) && val !== "", {
      message: t("validations:invalid_value"),
    })
    .refine((val) => Number(val) > 0, {
      message: t("validations:invalid_value"),
    });

  return z.object({
    maritalStatus: z.enum(MaritalStatus, {
      message: t("validations:required"),
    }),
    dependents: numberFieldSchema,
    employmentStatus: z.enum(EmploymentStatus, {
      message: t("validations:required"),
    }),
    monthlyIncome: numberFieldSchema,
    housingStatus: z.enum(HousingStatus, {
      message: t("validations:required"),
    }),
  });
}
