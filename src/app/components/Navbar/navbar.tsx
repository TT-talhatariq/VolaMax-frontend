'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="flex items-center bg-[#163b82] px-6 py-5 text-white shadow">
      <div className="flex items-center gap-2">
        <Image src="/title.svg" alt="Volamex Logo" width={150} height={100} />
      </div>
    </header>
  );
}
