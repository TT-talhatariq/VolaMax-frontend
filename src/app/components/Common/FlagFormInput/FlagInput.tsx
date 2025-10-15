'use client';

import React from 'react';

import Image from 'next/image';

import { ChevronDown } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  Icon?: React.ElementType;
  showFlag?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  Icon,
  showFlag,
  ...props
}) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="mb-1 block text-sm font-[400] text-[#8181A5]">
          {label}
        </label>
      )}

      <div className="flex items-center border-b border-gray-300 bg-transparent px-1 py-2 transition-all focus-within:border-[var(--brand-blue)]">
        {showFlag && (
          <div className="flex items-center border-r border-gray-300 pr-2">
            <Image
              src="/us.png"
              alt="Flag"
              width={20}
              height={14}
              className="object-contain"
            />
            <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
          </div>
        )}

        <input
          className="flex-1 bg-transparent px-2 text-gray-700 outline-none placeholder:text-gray-400"
          {...props}
        />

        {Icon && <Icon className="mr-2 h-5 w-5 text-gray-400" />}
      </div>
    </div>
  );
};

export default FormInput;
