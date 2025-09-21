import type { FC } from "react";
import type { SelectProps } from "./select.types";
import { select } from "./select.styles";

export const Select: FC<SelectProps> = ({
  size,
  rounded,
  intent,
  disabled,
  prefix,
  suffix,
  multiple,
  className,
  children,
  ...props
}) => {
  return (
    <div className="relative w-full flex items-center">
      {prefix && <span className="absolute left-3">{prefix}</span>}
      <select
        multiple={multiple}
        disabled={disabled}
        className={`${select({
          size,
          rounded,
          intent,
          disabled: !!disabled,
          className,
        })} ${prefix ? "pl-10" : ""} ${suffix ? "pr-10" : ""}`}
        {...props}
      >
        {children}
      </select>
      {suffix && <span className="absolute right-3">{suffix}</span>}
    </div>
  );
};
