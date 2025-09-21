import { tv } from "tailwind-variants";

export const dateField = tv({
  base: `
    block w-full border
    text-gray-900 dark:text-gray-100
    bg-white dark:bg-gray-800
    focus:outline-none focus:ring-2 focus:ring-blue-500
    transition-colors duration-200
  `,
  variants: {
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-md",
      md: "rounded-lg",
      full: "rounded-full",
    },
    intent: {
      default: "border-gray-300 dark:border-gray-700",
      primary: "border-blue-500 dark:border-blue-400",
      success: "border-green-500 dark:border-green-400",
      error: "border-red-600 dark:border-red-400",
    },
    disabled: {
      true: "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-70",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "md",
    intent: "default",
    disabled: false,
  },
});
