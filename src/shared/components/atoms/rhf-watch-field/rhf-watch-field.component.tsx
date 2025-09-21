import type { ReactNode } from "react";
import { useFormContext, useWatch, type FieldValues, type Path } from "react-hook-form";

type WatchProps<T extends FieldValues> = {
  name: Path<T>;
  children: (value: T[keyof T]) => ReactNode;
};

export function WatchField<T extends FieldValues>({ name, children }: WatchProps<T>) {
  const { control } = useFormContext<T>();

  const value = useWatch({ name, control });

  return <>{children(value)}</>;
}
