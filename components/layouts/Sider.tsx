'use client';

import SiderButton from '@/components/layouts/SiderButton';
import Sidebar from '@/components/sidebar/Sidebar';

import { useState } from 'react';

export type SidebarType = 'Posting' | 'Prologue' | 'Guestbook';
export default function Sider() {
  const buttonList: SidebarType[] = ['Posting', 'Prologue', 'Guestbook'];
  const [sidebar, setSidebar] = useState<SidebarType | null>(null);
  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-7 h-full items-start justify-start'>
        {buttonList.map((type) => (
          <SiderButton key={type} type={type} setSidebar={setSidebar} />
        ))}
      </div>
      {sidebar && <Sidebar type={sidebar} setSidebar={setSidebar} />}
    </div>
  );
}
