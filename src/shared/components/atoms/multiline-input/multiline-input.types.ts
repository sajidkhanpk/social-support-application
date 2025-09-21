export type MultilineInputProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    intent?: "default" | "error";
  };
