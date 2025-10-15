'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const PrimaryButton = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full rounded-sm py-2 font-medium text-white shadow-md transition-all"
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
