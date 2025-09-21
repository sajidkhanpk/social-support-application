import React, { useState } from "react";
import { generateContent } from "@/services/open-ai/openai-service";
import { MultilineInput } from "@shared/components/atoms/multiline-input";
import { Typography } from "@shared/components/atoms/typography";
import { Button } from "@shared/components/atoms/button";
import { Spinner } from "@shared/components/atoms/spinner/spinner.component";
import { useTranslation } from "react-i18next";

interface AIContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: (content: string) => void;
  initialPrompt?: string;
}

const AIContentModal: React.FC<AIContentModalProps> = ({ isOpen, onClose, onAccept, initialPrompt = "" }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation(["ai-help-modal", "common"], {
    useSuspense: true,
  });

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError(t("ai-help-modal:enter_query"));
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const content = await generateContent(prompt);
      setGeneratedContent(content);
    } catch (err: any) {
      setError(err.message || t("ai-help-modal:failed_to_generate_response"));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAccept = () => {
    onAccept(generatedContent);
    handleClose();
  };

  const handleClose = () => {
    setPrompt("");
    setGeneratedContent("");
    setError("");
    onClose();
  };

  const toggleEdit = () => {
    setIsEditing((oldState) => !oldState);
  };

  if (!isOpen) return null;

  const isGeneratingOrHasNoContent = !generatedContent || isGenerating;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <Typography variant="h4" as="h3">
            {t("ai-help-modal:get_help")}
          </Typography>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-800 dark:text-gray-100">
              {t("ai-help-modal:your_query")}
            </label>
            <MultilineInput id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={t("ai-help-modal:provide_brief_description")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} disabled={isGenerating} />
          </div>

          <div className="mb-4">
            <Button onClick={handleGenerate} disabled={isGenerating} className="w-full flex items-center justify-center">
              {isGenerating ? (
                <>
                  <Spinner />
                  {t("ai-help-modal:generating")}
                </>
              ) : (
                t("ai-help-modal:generate_content")
              )}
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="generated-content" className="block text-sm font-medium text-gray-800 dark:text-gray-100">
              {t("ai-help-modal:write_for_me")}
            </label>
            <MultilineInput id="generated-content" value={generatedContent} onChange={(e) => setGeneratedContent(e.target.value)} disabled={!isEditing} rows={6} placeholder={t("ai-help-modal:your_generated_content")} />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex flex-col md:flex-row justify-end gap-1">
          <Button className="order-4 md:order-1" variant="text" onClick={handleClose} disabled={isGenerating}>
            {t("common:action.discard")}
          </Button>
          <Button className="order-3 md:order-2" variant="text" onClick={() => setGeneratedContent("")} disabled={isGeneratingOrHasNoContent}>
            {t("common:action.clear")}
          </Button>

          <Button className="order-2 md:order-3" variant="text" onClick={toggleEdit} disabled={isGeneratingOrHasNoContent}>
            {t("common:action.edit")}
          </Button>
          <Button className="order-1 md:order-4" onClick={handleAccept} disabled={isGeneratingOrHasNoContent}>
            {t("common:action.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIContentModal;
