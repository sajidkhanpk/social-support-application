import { z } from "zod";
import { createPersonalInformationSchema } from "./steps/personal-info-step/personal-info-step.schema";
import { createFamilyAndFinancialInfoSchema } from "./steps/family-and-financial-info-step/family-and-financial-info-step.schema";
import { createSituationDescriptionSchema } from "./steps/situation-description/situation-description-step.schema";

export function createSupportApplicationSchema(
  t: (key: string, options?: any) => string
) {
  return createPersonalInformationSchema(t)
    .extend(createFamilyAndFinancialInfoSchema(t).shape)
    .extend(createSituationDescriptionSchema(t).shape);
}

export type SupportApplication = z.infer<
  ReturnType<typeof createSupportApplicationSchema>
>;
