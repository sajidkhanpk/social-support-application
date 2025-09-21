import { FormProvider } from "react-hook-form";
import { Button } from "@shared/components/atoms/button";
import { PersonalInformationStep } from "./steps/personal-info-step/personal-info-step.component";
import { steps } from "./lib/constants";
import { Suspense } from "react";
import { FamilyAndFinancialSupportStep } from "./steps/family-and-financial-info-step/family-and-financial-info-step.component";
import Stepper from "@/shared/components/molecules/stepper/stepper.component";
import { SituationDescriptionStep } from "./steps/situation-description/situation-description-step.component";
import { useTranslation } from "react-i18next";
import {
  ActionButtonsSkeleton,
  FormFieldsSkeleton,
} from "./components/application-skeleton/application-skeleton.component";
import { useSupportApplicationForm } from "./support-application-form.hook";

function SupportApplicationForm() {
  const {
    t,
    methods,
    currentStep,
    completedSteps,
    handleStepClick,
    onSubmit,
    prev,
    next,
  } = useSupportApplicationForm();

  return (
    <div>
      <Stepper
        steps={steps.map((step) => t(`support-application:${step}`))}
        currentStep={currentStep}
        completedSteps={completedSteps}
        onStepClick={handleStepClick}
        className="flex-col gap-6 sm:flex-row md:gap-1"
      />
      <Suspense
        fallback={
          <div className="flex flex-col gap-3">
            <FormFieldsSkeleton />
            <ActionButtonsSkeleton />
          </div>
        }
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <div className="mt-6">
              {currentStep === 0 && <PersonalInformationStep />}
              {currentStep === 1 && <FamilyAndFinancialSupportStep />}
              {currentStep === 2 && <SituationDescriptionStep />}
            </div>
            <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
              <Button
                className="w-full"
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
              >
                {t("common:action.previous")}
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button className="w-full" type="button" onClick={next}>
                  {t("common:action.next")}
                </Button>
              ) : (
                <SubmitButton />
              )}
            </div>
          </form>
        </FormProvider>
      </Suspense>
    </div>
  );
}

function SubmitButton() {
  const { t } = useTranslation("common", {
    useSuspense: true,
  });

  return (
    <Button type="submit" className="w-full order-0 md:order-1">
      {t("action.submit")}
    </Button>
  );
}

export default SupportApplicationForm;
