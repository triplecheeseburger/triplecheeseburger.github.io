import Header from '@/components/layouts/Header';
import LineBox from '@/components/layouts/LineBox';
import Sider from '@/components/layouts/Sider';
import TabBar from '@/components/layouts/TabBar';
import FileTree from '@/components/sidebar/server/FileTree';

import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col w-screen h-screen items-start justify-center'>
      <Header />
      <div className='flex flex-row w-full grow items-start overflow-y-scroll'>
        <Sider>
          <FileTree />
        </Sider>
        <div className='grow flex-shrink min-w-0 flex flex-col h-full border-t border-t-polar-night-3'>
          <TabBar />
          {children}
        </div>
      </div>
    </div>
  );
}
