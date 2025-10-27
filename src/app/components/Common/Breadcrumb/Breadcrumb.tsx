'use client';

import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <div className={`text-sm text-gray-600 ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span
            className={item.isActive ? 'font-semibold text-gray-900' : 'hover:text-gray-800'}
          >
            {item.label}
          </span>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;

