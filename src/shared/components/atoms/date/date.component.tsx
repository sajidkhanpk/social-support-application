import type { FC } from "react";
import { dateField } from "./date.styles";
import type { DateFieldProps } from "./date.types";

export const DateField: FC<DateFieldProps> = ({
  size,
  rounded,
  intent,
  prefix,
  suffix,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className="relative w-full flex items-center">
      {prefix && <span className="absolute left-3">{prefix}</span>}
      <input
        type="date"
        disabled={disabled}
        className={`${dateField({
          size,
          rounded,
          intent,
          disabled: !!disabled,
        })} ${prefix ? "pl-10" : ""} ${suffix ? "pr-10" : ""} ${
          className || ""
        }`}
        {...props}
      />
      {suffix && <span className="absolute right-3">{suffix}</span>}
    </div>
  );
};
