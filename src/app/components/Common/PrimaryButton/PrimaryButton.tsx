'use client';

import React from 'react';

import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: LucideIcon;
}

export const PrimaryButton = ({ text, icon: Icon, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="flex w-full items-center justify-center gap-2 rounded-sm py-2 font-medium text-white shadow-md transition-all"
      style={{
        background: 'var(--gradient-button)',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLButtonElement).style.background =
          'var(--gradient-button-hover)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLButtonElement).style.background =
          'var(--gradient-button)';
      }}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full rounded-sm py-2 font-medium shadow-md transition-all"
      style={{
        backgroundColor: '#E2E7F4',
        color: 'var(--brand-blue)',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          '#d7def0';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          '#E2E7F4';
      }}
    >
      {text}
    </button>
  );
};

export const OutlinedButton = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full cursor-pointer rounded-sm border border-[#BAB5B5] bg-white py-2 font-medium text-[#BAB5B5] shadow-sm transition-all active:bg-gray-100"
    >
      {text}
    </button>
  );
};
