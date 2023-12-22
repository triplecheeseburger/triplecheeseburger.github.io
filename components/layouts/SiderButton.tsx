import Selectable from '@/components/global/Selectable';
import { SidebarType } from '@/components/layouts/Sider';

import { usePathname, useRouter } from 'next/navigation';

import React from 'react';
import { FaCoffee, FaSeedling } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa6';

export default function SiderButton({
  type,
  current,
  setSidebar,
}: {
  type: SidebarType;
  current: SidebarType | null;
  setSidebar: React.Dispatch<React.SetStateAction<SidebarType | null>>;
}) {
  const router = useRouter();
  const pathName = usePathname();

  const iconMap: { [key: string]: React.ReactNode } = {
    Posts: <FaFolder />,
    Portfolio: <FaSeedling />,
    Guestbook: <FaCoffee />,
  };

  const handleOnClick = () => {
    setSidebar((prev) => (prev === type ? null : type));
  };

  const handleLink = () => {
    if (pathName.startsWith(`/${type?.toLowerCase()}`)) {
      router.replace('/');
      return;
    }
    router.push(`/${type.toLowerCase()}`);
  };

  return (
    <Selectable clicked={type == current} color={'polar-night-3'}>
      <button
        className='w-5 pl-0.5 m-1'
        style={{ height: `${type.length * 0.45 + 3}rem` }}
        onClick={handleOnClick}
      >
        <div onClick={handleLink}>
          <div
            className='text-xs text-left rotate-180'
            style={{ writingMode: 'vertical-lr' }}
          >
            {type}
          </div>
          <div className='mt-2'>{iconMap[type]}</div>
        </div>
      </button>
    </Selectable>
  );
}
