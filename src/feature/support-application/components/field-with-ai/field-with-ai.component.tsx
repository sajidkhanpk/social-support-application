import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { Button } from "@/shared/components/atoms/button";
import { RHFTMultilineTextField } from "@/shared/components/molecules/rhf-multiline-text-field/rhf-multiline-text-field.component";
import AIContentModal from "@/shared/components/organisms/ai-content-modal/ai-content-modal.component";
import { useFormContext } from "react-hook-form";
import type { FieldWithAIProps } from "./field-with-ai.types";
import { useTranslation } from "react-i18next";

export function FieldWithAI<T extends FieldValues>({
  name,
  label,
  placeholder,
  buttonLabel = "help_me_write",
}: FieldWithAIProps<T>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setValue } = useFormContext<T>();
  const { t } = useTranslation("common", {
    useSuspense: true,
  });

  const handleAcceptContent = (content: string) => {
    setValue(name, content as any, { shouldValidate: true });
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <RHFTMultilineTextField<T>
        name={name}
        label={label}
        placeholder={placeholder}
      />
      <Button
        type="button"
        color="success"
        size="sm"
        onClick={() => setIsModalOpen(true)}
        className="self-end capitalize"
      >
        {t(buttonLabel)}
      </Button>
      <AIContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAccept={handleAcceptContent}
      />
    </div>
  );
}
