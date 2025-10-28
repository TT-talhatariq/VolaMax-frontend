'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { ChevronDown, Plus } from 'lucide-react';

interface ProfileInputProps {
  label?: string;
  placeholder?: string;
  isDropdown?: boolean;
  options?: string[];
  optional?: boolean;
  optionalText?: string;
  value?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  iconImage?: string;
  showUploadIcon?: boolean;
  iconBgColor?: string;
  iconColor?: string;
  inputBgColor?: string;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  placeholder,
  isDropdown = false,
  options = [],
  optional = false,
  optionalText,
  value = '',
  onChange,
  icon,
  iconImage,
  showUploadIcon = false,
  iconBgColor = '#4887F6',
  iconColor = '#FFFFFF',
  inputBgColor = '#F7FAFF',
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSelect = (option: string) => {
    setInputValue(option);
    setOpen(false);
    onChange?.(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className="relative w-full">
      {label && (
        <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-700">
          {label}
          {optional && (
            <span className="text-sm text-gray-400">
              ({optionalText || 'Optional'})
            </span>
          )}
        </label>
      )}

      <div
        className={`relative ${isDropdown ? 'cursor-pointer' : ''} flex min-h-[45px] items-center justify-between rounded-[8px] px-3 py-2`}
        style={{ backgroundColor: inputBgColor }}
        onClick={() => isDropdown && setOpen(!open)}
      >
        {!isDropdown ? (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 outline-none"
            />

            {(iconImage || showUploadIcon) && (
              <div
                className={`ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[4px]`}
                style={iconImage ? {} : { backgroundColor: iconBgColor }}
              >
                {iconImage ? (
                  <Image
                    src={iconImage}
                    alt="icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  <Plus className="h-5 w-5" style={{ color: iconColor }} />
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <span
              className={`text-gray-800 ${inputValue ? '' : 'text-gray-400'}`}
            >
              {inputValue || placeholder}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </>
        )}
      </div>

      {isDropdown && open && options.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-[8px] border border-gray-200 bg-white shadow-md">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileInput;
