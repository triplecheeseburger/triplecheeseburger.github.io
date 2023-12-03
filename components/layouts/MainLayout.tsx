import Header from '@/components/layouts/Header';
import Sider from '@/components/layouts/Sider';

import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <Header />
      <div className='flex flex-row w-full items-start'>
        <Sider />
        {children}
      </div>
    </div>
  );
}
