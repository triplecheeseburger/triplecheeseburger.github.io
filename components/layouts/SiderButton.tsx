import { SidebarType } from '@/components/layouts/Sider';

import React from 'react';
import { FaCoffee, FaFolder, FaSeedling } from 'react-icons/fa';

export default function SiderButton({
  type,
  setSidebar,
}: {
  type: SidebarType;
  setSidebar: React.Dispatch<React.SetStateAction<SidebarType | null>>;
}) {
  const iconMap: { [key: string]: React.ReactNode } = {
    Posting: <FaFolder />,
    Prologue: <FaSeedling />,
    Guestbook: <FaCoffee />,
  };

  const handleOnClick = () => {
    setSidebar((prev) => (prev === type ? null : type));
  };

  return (
    <button
      className='w-full m-1'
      style={{ height: `${type.length * 0.8}rem` }}
      onClick={handleOnClick}
    >
      <div
        className='text-xs text-left rotate-180'
        style={{ writingMode: 'vertical-lr' }}
      >
        {type}
      </div>
      <div className='mt-2'>{iconMap[type]}</div>
    </button>
  );
}
