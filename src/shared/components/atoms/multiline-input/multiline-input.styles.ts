import { tv } from "tailwind-variants";

export const input = tv({
  base: `
    w-full px-3 py-2 rounded-md border
    text-gray-900 dark:text-gray-100
    placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors duration-200
  `,
  variants: {
    intent: {
      default: `
        border-gray-400 dark:border-gray-600
        bg-white dark:bg-gray-800
        hover:border-gray-500 dark:hover:border-gray-500
        focus:ring-blue-600 dark:focus:ring-blue-400
      `,
      error: `
        border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/30
        text-red-700 dark:text-red-200
        placeholder-red-400 dark:placeholder-red-400
        focus:ring-red-600 dark:focus:ring-red-400
      `,
      success: `
        border-green-600 bg-green-50 dark:bg-green-900/30
        text-green-700 dark:text-green-200
        placeholder-green-400 dark:placeholder-green-500
        focus:ring-green-600 dark:focus:ring-green-400
      `,
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
    disabled: {
      true: "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-70 border-gray-400 dark:border-gray-600",
      false: "",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
    disabled: false,
  },
});
