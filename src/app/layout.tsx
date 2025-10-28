'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen overflow-hidden antialiased`}
      >
        <Navbar />

        {/* Fix starts here */}
        <div className="flex h-[calc(100vh-56px)]">
          <Sidebar />

          <main className="flex-1 overflow-y-auto bg-white p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
