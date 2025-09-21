import { z } from "zod";
import { Gender } from "./personal-info-step.types";

export function createPersonalInformationSchema(t: (key: string, options?: any) => string) {
  const stringSchema = z.string(t("validations:required")).trim();
  const countrySchema = z.object({ id: z.union([z.string(), z.number()]), label: z.string(), value: z.string() });

  return z.object({
    name: stringSchema.min(2, t("validations:string_too_small", { min: 2 })),
    nationalId: stringSchema.min(5, t("validations:string_too_small", { min: 5 })).max(20, t("validations:string_too_big", { max: 20 })),
    dateOfBirth: stringSchema.refine((val) => !isNaN(Date.parse(val)), t("validations:invalid_value")),
    gender: z.enum(Gender, {
      message: t("validations:required"),
    }),
    country: countrySchema.nullish().refine((val) => Boolean(val), { message: t("validations:invalid_value") }),
    state: stringSchema.min(2, t("validations:string_too_small", { min: 2 })),
    city: stringSchema.min(2, t("validations:string_too_small", { min: 2 })),
    address: stringSchema.min(5, t("validations:string_too_small", { min: 5 })).max(200, t("validations:string_too_big", { max: 200 })),
    phone: stringSchema.refine(async (val) => {
      if (!val) return false;

      try {
        // Dynamically import the library only when needed
        const libphonenumber = await import("google-libphonenumber");
        const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(val));
      } catch (_) {
        return false;
      }
    }, t("validations:invalid_value")),
    email: stringSchema.email(t("validations:email")),
  });
}
