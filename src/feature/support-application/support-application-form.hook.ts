import { useForm, type SubmitHandler } from "react-hook-form";
import type { PersistedStep, SupportApplicationFormValues, TriggerableFields } from "./support-application-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSupportApplicationSchema } from "./support-application-form.schema";
import { APPLICATION_STEP_STORAGE_KEY, APPLICATION_STORAGE_KEY, steps, stepSchemas, SUPPORT_APPLICATION_FORM_DEFAULT_VALUES } from "./lib/constants";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/shared/contexts/language-context";

export function useSupportApplicationForm() {
  // translation
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation(["support-application", "common", "validations"], {
    useSuspense: true,
  });

  // states
  const persistedStepData: PersistedStep = JSON.parse(localStorage.getItem(APPLICATION_STEP_STORAGE_KEY) || "{}");
  const [currentStep, setCurrentStep] = useState<number>(persistedStepData?.currentStep || 0);
  const [completedSteps, setCompletedSteps] = useState<number[]>(persistedStepData?.completedSteps || []);

  // rhf
  const persistedFormData = localStorage.getItem(APPLICATION_STORAGE_KEY);
  const methods = useForm<SupportApplicationFormValues>({
    mode: "onBlur", // validates only when leaving input
    reValidateMode: "onBlur", // re-validates only on blur again
    resolver: zodResolver(createSupportApplicationSchema(t)),
    defaultValues: persistedFormData ? (JSON.parse(persistedFormData) as SupportApplicationFormValues) : SUPPORT_APPLICATION_FORM_DEFAULT_VALUES,
  });
  const {
    trigger,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<SupportApplicationFormValues> = (data) => {
    console.log("Submitted ->", data);
    resetForm();
  };

  const isStepValid = async (stepIndex: number) => {
    try {
      const stepSchema = stepSchemas[stepIndex];
      const stepField = Object.keys(stepSchema.shape) as unknown as keyof SupportApplicationFormValues;
      methods.trigger(stepField);
      const values = methods.getValues();
      await stepSchema.parseAsync(values);

      return true;
    } catch {
      return false;
    }
  };

  const isCurrentStepValid = async () => {
    const isCurrentStepCompleted = completedSteps.includes(currentStep);
    // Verify step only if completed
    if (isCurrentStepCompleted) {
      return await isStepValid(currentStep);
    }

    return true;
  };

  const next = async () => {
    const valid = await isStepValid(currentStep);
    if (!valid) return;

    setCompletedSteps((prev) => {
      if (!prev.includes(currentStep)) return [...prev, currentStep];
      return prev;
    });
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const prev = async () => {
    if (!(await isCurrentStepValid())) return;

    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const handleStepClick = async (step: number) => {
    if (!(await isCurrentStepValid())) return;

    setCurrentStep(step);
  };

  const resetForm = () => {
    methods.reset(SUPPORT_APPLICATION_FORM_DEFAULT_VALUES);
    setCurrentStep(0);
    setCompletedSteps([]);
    localStorage.removeItem(APPLICATION_STORAGE_KEY);
    localStorage.removeItem(APPLICATION_STEP_STORAGE_KEY);
  };

  // Update errors on changing translations
  useEffect(() => {
    const erroredFields = Object.keys(errors).filter((field): field is TriggerableFields => field !== "root");

    if (erroredFields.length > 0) {
      trigger(erroredFields);
    }
  }, [currentLanguage, errors, trigger]);

  // Persist form data on every change
  useEffect(() => {
    const subscription = methods.watch((values) => {
      localStorage.setItem(APPLICATION_STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  // Persist steps data
  useEffect(() => {
    localStorage.setItem(
      APPLICATION_STEP_STORAGE_KEY,
      JSON.stringify({
        currentStep,
        completedSteps,
      })
    );
  }, [currentStep, completedSteps]);

  return {
    t,
    methods,
    currentStep,
    completedSteps,
    handleStepClick,
    onSubmit,
    prev,
    next,
  };
}
