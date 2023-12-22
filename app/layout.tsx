import '@/app/globals.css';
import MainLayout from '@/components/layouts/server/MainLayout';
import type { Metadata } from 'next';

import { JetBrains_Mono } from 'next/font/google';
import Head from 'next/head';

import React from 'react';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "triplecheeseburger's blog",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={jetBrainsMono.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
