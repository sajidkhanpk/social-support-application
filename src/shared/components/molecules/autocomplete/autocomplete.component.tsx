import React, { useState, useRef, useEffect } from "react";
import type { AutocompleteProps, AutocompleteOption } from "./autocomplete.types";
import { useTranslation } from "react-i18next";

const Autocomplete: React.FC<AutocompleteProps> = ({ id, options, value, onChange, onInputChange, placeholder, disabled = false, isLoading = false, noOptionsMessage, className = "", renderOption, error = false }) => {
  const { t } = useTranslation("common", {
    useSuspense: true,
  });
  const [inputValue, setInputValue] = useState(value?.label || "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update input value when external value changes
  useEffect(() => {
    setInputValue(value?.label || "");
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex] && optionsRef.current) {
      const optionElement = optionRefs.current[highlightedIndex];
      const optionsContainer = optionsRef.current;

      if (optionElement) {
        const optionTop = optionElement.offsetTop;
        const optionBottom = optionTop + optionElement.offsetHeight;
        const containerTop = optionsContainer.scrollTop;
        const containerBottom = containerTop + optionsContainer.offsetHeight;

        if (optionTop < containerTop) {
          optionsContainer.scrollTop = optionTop;
        } else if (optionBottom > containerBottom) {
          optionsContainer.scrollTop = optionBottom - optionsContainer.offsetHeight;
        }
      }
    }
  }, [highlightedIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    setHighlightedIndex(0);
    onInputChange?.(newValue);
  };

  const handleOptionSelect = (option: AutocompleteOption) => {
    onChange(option);
    setInputValue(option.label);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleInputFocus = () => {
    if (!disabled) {
      setIsOpen(true);
      setHighlightedIndex(0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = highlightedIndex < filteredOptions.length - 1 ? highlightedIndex + 1 : 0;
        setHighlightedIndex(nextIndex);
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = highlightedIndex > 0 ? highlightedIndex - 1 : filteredOptions.length - 1;
        setHighlightedIndex(prevIndex);
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
          handleOptionSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case "Tab":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case "Home":
        e.preventDefault();
        setHighlightedIndex(0);
        // Scroll to top
        setTimeout(() => {
          if (optionsRef.current) {
            optionsRef.current.scrollTop = 0;
          }
        }, 0);
        break;
      case "End":
        e.preventDefault();
        setHighlightedIndex(filteredOptions.length - 1);
        // Scroll to bottom
        setTimeout(() => {
          if (optionsRef.current && optionRefs.current[filteredOptions.length - 1]) {
            const lastOption = optionRefs.current[filteredOptions.length - 1];
            optionsRef.current.scrollTop = lastOption!.offsetTop;
          }
        }, 0);
        break;
    }
  };

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

  const defaultRenderOption = (option: AutocompleteOption) => <div className="p-2 cursor-pointer">{option.label}</div>;

  // Sync input value with value
  useEffect(() => {
    if (isOpen) return;
    setInputValue((oldValue) => {
      if (value?.label && oldValue !== value.label) return value?.label;
      return oldValue;
    });
  }, [isOpen, setInputValue, value]);

  return (
    <div id={id} ref={wrapperRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder ?? ""}
          disabled={disabled}
          className={`
            w-full px-3 py-2 border rounded-md focus:outline-none
            focus:border-transparent
            disabled:cursor-not-allowed
            ${
              error
                ? ` border-red-600 dark:border-red-400 bg-red-50 dark:bg-red-900/30
        text-red-700 dark:text-red-200
        placeholder-red-400 dark:placeholder-red-400
        focus:ring-red-600 dark:focus:ring-red-400`
                : `border-gray-300 bg-white text-gray-900 disabled:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:disabled:bg-gray-700 focus:ring-2 focus:ring-blue-500`
            }
          `}
        />
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>

      {isOpen && !disabled && (
        <div
          ref={optionsRef}
          className="
        absolute z-10 w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto
        bg-white border border-gray-200
        dark:bg-gray-800 dark:border-gray-700
      "
        >
          {isLoading ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto mb-2"></div>
              {t("loading")}...
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">{noOptionsMessage}</div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option.id}
                ref={(el) => {
                  optionRefs.current[index] = el;
                }}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`
              cursor-pointer transition-colors duration-200
              ${highlightedIndex === index ? "bg-blue-100 dark:bg-blue-600/30" : "hover:bg-gray-100 dark:hover:bg-gray-700"}
              ${index === 0 ? "rounded-t-md" : ""}
              ${index === filteredOptions.length - 1 ? "rounded-b-md" : ""}
              px-2 py-1 text-gray-900 dark:text-gray-100
            `}
              >
                {renderOption ? renderOption(option) : defaultRenderOption(option)}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
