import { tv } from "tailwind-variants";

export const card = tv({
  base: `
    bg-white dark:bg-gray-800
    border border-gray-200 dark:border-gray-700
    text-gray-900 dark:text-gray-100
    transition-colors duration-200
  `,
  variants: {
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    intent: {
      default: "border-gray-200 dark:border-gray-700",
      primary: "border-blue-500 dark:border-blue-400",
      secondary: "border-gray-400 dark:border-gray-500",
      success: "border-green-500 dark:border-green-400",
      error: "border-red-500 dark:border-red-400",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "xl",
    shadow: "sm",
    intent: "default",
  },
});
