import { Controller, useFormContext } from "react-hook-form";
import type { FieldPath, FieldValues } from "react-hook-form";
import Autocomplete from "@/shared/components/molecules/autocomplete/autocomplete.component";
import type { AutocompleteOption } from "@/shared/components/molecules/autocomplete/autocomplete.types";
import { useState } from "react";
import { Typography } from "@/shared/components/atoms/typography";

type RHFCountrySelectProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  helpText?: string;
};

function RHFCountrySelect<TFieldValues extends FieldValues>({ name }: RHFCountrySelectProps<TFieldValues>) {
  const { control } = useFormContext<TFieldValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchCountryOptions, setCountrySearchOptions] = useState<AutocompleteOption[]>([]);

  const handleCountrySearch = async (searchTerm: string) => {
    setIsLoading(true);

    const query = searchTerm ? "/name/" + searchTerm : "/all";
    const res = await fetch("https://restcountries.com/v3.1" + query + "?fields=name,cca2,flag");
    if (!res.ok) {
      setIsLoading(false);
      return;
    }
    const data = await res.json();

    const filtered: AutocompleteOption[] = data.map((country: any) => ({
      id: country.cca2,
      label: country.name.common,
      value: country.cca2,
      flag: country.flag,
    }));

    setCountrySearchOptions(filtered);
    setIsLoading(false);
  };

  const customCountryRenderOption = (option: AutocompleteOption) => (
    <div key={option.value} className="px-2 cursor-pointer flex items-center">
      <div className="w-8 h-8 bg-blue-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
        <span className="text-blue-600 font-bold text-sm">{option.flag}</span>
      </div>
      <div>
        <div className="font-medium text-gray-900 dark:text-gray-400">{option.label}</div>
        <div className="text-sm text-gray-500">{option.value}</div>
      </div>
    </div>
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          <label htmlFor="countrySelect">Country</label>
          <Autocomplete id="countrySelect" options={searchCountryOptions} value={field.value} onChange={field.onChange} onInputChange={handleCountrySearch} isLoading={isLoading} placeholder="Select country" noOptionsMessage="No result found" renderOption={customCountryRenderOption} />

          {fieldState.error && (
            <Typography variant="body1" as="span" color="error">
              {fieldState.error.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
}

export default RHFCountrySelect;
