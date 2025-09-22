import { useFormContext, Controller } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Typography } from "../../atoms/typography";
import { useLanguage } from "@/shared/contexts/language-context";

interface RHFInternationalPhoneInputProps<TFormValues extends FieldValues> {
  name: FieldPath<TFormValues>;
  label?: string;
  placeholder?: string;
  defaultCountry?: string;
}

export function RHFInternationalPhoneInput<TFormValues extends FieldValues>({ name, label, placeholder, defaultCountry = "ua" }: RHFInternationalPhoneInputProps<TFormValues>) {
  const { control } = useFormContext<TFormValues>();
  const { languageDir } = useLanguage();

  const isRTL = languageDir === "rtl";

  const inputBorderRadius = isRTL ? "!rounded-l-md !rounded-r-none" : "!rounded-r-md !rounded-l-none";
  const selectorBorderRadius = isRTL ? "!rounded-r-md !rounded-l-none" : "!rounded-l-md !rounded-r-none";
  const dropdownPosition = isRTL ? "right-0" : "left-0";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col w-full">
          {label && (
            <Typography variant="body2" as="label" className="mb-2 text-gray-700 font-semibold">
              {label}
            </Typography>
          )}
          <PhoneInput
            {...field}
            defaultCountry={defaultCountry}
            placeholder={placeholder}
            onChange={(value) => field.onChange(value)}
            inputProps={{
              dir: isRTL ? "rtl" : "ltr",
            }}
            inputClassName={`

              w-full !h-auto !px-3 !py-2
              !text-gray-900 dark:!text-gray-100
              !placeholder-gray-400 dark:!placeholder-gray-500
              !bg-white dark:!bg-gray-800
              transition-all duration-200
              ${inputBorderRadius}
              ${fieldState.error ? "!border-red-500 dark:!border-red-400 hover:!border-red-600 dark:hover:!border-red-500 focus:!outline-none focus:!ring-2 focus:!ring-gray-400 focus:!border-gray-400" : "!border-gray-300 dark:!border-gray-700 hover:!border-gray-400 dark:hover:!border-gray-600 focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500"}
            `}
            countrySelectorStyleProps={{
              buttonClassName: `
                flex items-center !h-auto !px-3 !py-2
                !bg-white dark:!bg-gray-800
                !text-gray-900 dark:!text-gray-100
                border
                ${selectorBorderRadius}
                ${fieldState.error ? "!border-red-500 dark:!border-red-400 hover:!border-red-600 dark:hover:!border-red-500" : "!border-gray-300 dark:!border-gray-700 hover:!border-gray-400 dark:hover:!border-gray-600"}
                focus:!outline-none focus:!ring-2 focus:!ring-blue-500
                transition-all duration-200
              `,
              dropdownStyleProps: {
                className: `
                  absolute z-50 mt-1
                  !min-w-full !w-[min(22rem,80vw)]
                  !bg-white dark:!bg-gray-800
                  !border !border-gray-300 dark:!border-gray-700
                  !rounded-lg !shadow-lg
                   ${dropdownPosition}
                `,
                listItemClassName: `
                  !px-4 !py-2
                  !cursor-pointer
                  !text-gray-900 dark:!text-gray-100
                  hover:!bg-gray-100 dark:hover:!bg-gray-700
                `,
                listItemPreferredClassName: "!font-semibold",
                listItemSelectedClassName: "!bg-blue-500 !text-white dark:!bg-blue-600",
                listItemFocusedClassName: "!bg-blue-100 dark:!bg-blue-700",
                listItemCountryNameClassName: "!ml-2",
                listItemDialCodeClassName: "!text-gray-500 dark:!text-gray-300",
                preferredListDividerClassName: "!border-t !border-gray-200 dark:!border-gray-600 !my-1",
              },
            }}
          />

          {fieldState.error && (
            <Typography variant="body2" color="error" className="mt-1">
              {fieldState.error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
}
