'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ChevronRight } from 'lucide-react';

import { sidebarItems } from './constants';

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <aside className="shadow-elevation-3 relative h-screen w-64 overflow-y-auto bg-white">
      <nav className="font-medium text-gray-700">
        {sidebarItems.map((item, index) => (
          <div key={index} className="relative">
            {!item.subItems ? (
              <Link
                href={item.href || '#'}
                className={`relative flex items-center gap-3 px-6 py-3 transition-all hover:bg-blue-50 ${
                  pathname === item.href
                    ? 'bg-blue-50 font-semibold text-blue-600'
                    : 'text-black'
                }`}
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                )}
                {item.title}

                <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200"></span>
              </Link>
            ) : (
              <>
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`relative flex w-full items-center justify-between gap-3 px-6 py-3 transition-all hover:bg-blue-50 ${
                    pathname.startsWith(item.href || '')
                      ? 'bg-blue-50 font-semibold text-blue-600'
                      : 'text-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                      />
                    )}
                    <span>{item.title}</span>
                  </div>

                  <ChevronRight
                    className={`text-gray-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                    size={18}
                  />

                  <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200"></span>
                </button>

                {openIndex === index && (
                  <div className="space-y-1 pb-2">
                    {item.subItems.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className={`relative flex items-center gap-2 rounded px-12 py-3 text-sm transition-all hover:bg-blue-50 ${
                          pathname === sub.href
                            ? 'bg-blue-50 font-semibold text-blue-600'
                            : 'text-black'
                        }`}
                      >
                        {sub.icon && (
                          <Image
                            src={sub.icon}
                            alt={sub.title}
                            width={18}
                            height={18}
                          />
                        )}
                        {sub.title}

                        <span className="absolute bottom-0 left-0 h-px w-full bg-gray-200"></span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
