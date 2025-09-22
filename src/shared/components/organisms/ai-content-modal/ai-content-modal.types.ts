export interface AIContentModalProps {
  onClose: () => void;
  onAccept: (content: string) => void;
  initialPrompt?: string;
}
