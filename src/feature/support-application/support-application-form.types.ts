import type { SupportApplication } from "./support-application-form.schema";
import type { FieldErrors } from "react-hook-form";

export type SupportApplicationFormValues = SupportApplication;

export type PersistedStep = {
  currentStep: number;
  completedSteps: number[];
} | null;

export type TriggerableFields = Exclude<keyof FieldErrors<SupportApplicationFormValues>, "root">;

export type Country = SupportApplicationFormValues["country"];
