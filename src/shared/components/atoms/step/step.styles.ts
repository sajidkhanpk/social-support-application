import { tv } from "tailwind-variants";

export const stepCircle = tv({
  base: "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
  variants: {
    state: {
      active: "border-blue-600 bg-blue-100 text-blue-600",
      completed: "border-green-600 bg-green-100 text-green-600",
      upcoming: "border-gray-300 text-gray-400",
    },
  },
  defaultVariants: { state: "upcoming" },
});

export const stepLabel = tv({
  base: "mt-2 text-sm font-medium",
  variants: {
    state: {
      active: "text-blue-600",
      completed: "text-green-600",
      upcoming: "text-gray-500",
    },
  },
  defaultVariants: { state: "upcoming" },
});
