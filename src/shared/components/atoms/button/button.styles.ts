import { tv } from "tailwind-variants";

export const button = tv({
  base: `
    rounded-full font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-colors duration-200
  `,
  variants: {
    variant: {
      contained: "shadow",
      outlined: "border-2 bg-transparent dark:bg-transparent",
      text: "bg-transparent",
    },
    color: {
      primary: "",
      secondary: "",
      danger: "",
      success: "",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  },
  compoundVariants: [
    // Contained variants
    {
      variant: "contained",
      color: "primary",
      class: "text-white bg-blue-600 border-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:border-blue-500 focus:ring-blue-500",
    },
    {
      variant: "contained",
      color: "secondary",
      class: "text-gray-600 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-gray-200 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 focus:ring-gray-400",
    },
    {
      variant: "contained",
      color: "danger",
      class: "text-white bg-red-600 border-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 dark:border-red-500 focus:ring-red-500",
    },
    {
      variant: "contained",
      color: "success",
      class: "text-white bg-green-600 border-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 dark:border-green-500 focus:ring-green-500",
    },

    // Outlined variants
    {
      variant: "outlined",
      color: "primary",
      class: "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900",
    },
    {
      variant: "outlined",
      color: "secondary",
      class: "bg-transparent text-gray-800 border-gray-200 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-600",
    },
    {
      variant: "outlined",
      color: "danger",
      class: "bg-transparent text-red-600 border-red-600 hover:bg-red-50 dark:text-red-400 dark:border-red-500 dark:hover:bg-red-700",
    },
    {
      variant: "outlined",
      color: "success",
      class: "bg-transparent text-green-700 border-green-700 hover:bg-green-50 dark:text-green-500 dark:border-green-600 dark:hover:bg-green-900",
    },

    // Text variants
    {
      variant: "text",
      color: "primary",
      class: "bg-transparent text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900",
    },
    {
      variant: "text",
      color: "secondary",
      class: "bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600",
    },
    {
      variant: "text",
      color: "danger",
      class: "bg-transparent text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-700",
    },
    {
      variant: "text",
      color: "success",
      class: "bg-transparent text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-700",
    },
  ],
  defaultVariants: {
    variant: "contained",
    color: "primary",
    size: "md",
  },
});
