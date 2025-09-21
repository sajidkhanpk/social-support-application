import { tv } from "tailwind-variants";

export const typography = tv({
  base: "font-sans leading-relaxed",
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
      body1: "text-base font-normal",
      body2: "text-sm font-normal",
      caption: "text-xs font-normal",
    },
    color: {
      primary: "text-gray-800 dark:text-gray-100",
      secondary: "text-gray-600 dark:text-gray-400",
      success: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      inherit: "text-inherit",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "primary",
  },
});
