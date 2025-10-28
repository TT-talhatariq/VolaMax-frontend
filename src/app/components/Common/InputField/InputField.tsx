'use client';

import React, { useState } from 'react';
import { InputHTMLAttributes } from 'react';

import { ChevronDown, LucideIcon } from 'lucide-react';

interface InputFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onSelect'> {
  label?: string;
  icon?: LucideIcon;
  options?: string[];
  isDropdown?: boolean;
  onSelect?: (value: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  icon: Icon,
  options = [],
  isDropdown = false,
  onSelect,
  value = '',
  onChange,
  placeholder,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>(value);

  React.useEffect(() => {
    if (!isDropdown) {
      setInputValue(value);
    }
  }, [value, isDropdown]);

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
    onSelect?.(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(e);
  };

  return (
    <div className="relative mb-4 w-full">
      {label && (
        <label className="mb-1 block text-sm font-[400] text-[#8181A5]">
          {label}
        </label>
      )}

      <div
        className={`flex items-center border-b border-gray-300 bg-transparent px-3 transition-all focus-within:border-[var(--brand-blue)] ${
          isDropdown ? 'cursor-pointer' : ''
        }`}
        onClick={() => isDropdown && setOpen(!open)}
      >
        <input
          className="flex-1 bg-transparent font-[400] text-[#000000] outline-none placeholder:text-gray-400"
          readOnly={isDropdown}
          value={isDropdown ? selected : value || inputValue}
          onChange={!isDropdown ? handleChange : undefined}
          placeholder={placeholder}
          {...props}
        />

        {Icon && <Icon className="ml-2 h-5 w-5 text-gray-400" />}
        {isDropdown && <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />}
      </div>

      {isDropdown && open && options.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-md">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputField;
