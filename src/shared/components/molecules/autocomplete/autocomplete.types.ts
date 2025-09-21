export interface AutocompleteOption {
  id: string | number;
  label: string;
  value: string;
  [key: string]: any;
}

export interface AutocompleteProps {
  id?: string;
  options: AutocompleteOption[];
  value?: AutocompleteOption | null;
  onChange: (option: AutocompleteOption | null) => void;
  onInputChange?: (inputValue: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  noOptionsMessage?: string;
  className?: string;
  renderOption?: (option: AutocompleteOption) => React.ReactNode;
}
