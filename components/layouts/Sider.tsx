'use client';

import SiderButton from '@/components/layouts/SiderButton';
import usePost from '@/zustand/post';

import React, { useEffect, useState } from 'react';
import { FaMinus } from 'react-icons/fa6';

export type SidebarType = 'Posting' | 'Portfolio' | 'Guestbook';
export default function Sider({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState<SidebarType | null>(null);
  const { clear } = usePost();
  const buttonList: SidebarType[] = ['Posting', 'Portfolio', 'Guestbook'];
  const closeSider = () => {
    setSidebar(null);
  };

  useEffect(() => {
    if (sidebar !== 'Posting' && sidebar !== null) {
      clear();
    }
  }, [sidebar, clear]);

  return (
    <div className='flex flex-row h-full w-fit flex-shrink-0'>
      <div className='flex flex-col w-7 h-full items-start justify-start border-r border-r-polar-night-3 border-t border-t-polar-night-3'>
        {buttonList.map((type) => (
          <SiderButton
            key={type}
            type={type}
            current={sidebar}
            setSidebar={setSidebar}
          />
        ))}
      </div>
      {sidebar === 'Posting' && (
        <SidebarLayout closeSider={closeSider}>{children}</SidebarLayout>
      )}
    </div>
  );
}

function SidebarLayout({
  children,
  closeSider,
}: {
  children: React.ReactNode;
  closeSider: () => void;
}) {
  return (
    <div className='flex flex-col h-full w-52 items-start justify-start'>
      <div className='flex flex-row h-8 justify-end align-middle w-full bg-polar-night-2'>
        <button onClick={closeSider} className='px-3 h-7'>
          <FaMinus />
        </button>
      </div>
      {children}
    </div>
  );
}
