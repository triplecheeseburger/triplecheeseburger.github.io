'use client';

import regice from '@/public/images/378.png';
import usePost from '@/zustand/post';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { FaChevronRight } from 'react-icons/fa';

export default function HomeButton() {
  const { top } = usePost();
  const pathName = usePathname();
  const onClick = () => {
    location.href = '/';
  };

  return (
    <section className='flex flex-row content-start w-full h-full items-center'>
      <Image
        onClick={onClick}
        className='w-4 h-4 m-1 cursor-pointer'
        src={regice}
        alt={'image of regice'}
      />
      <h1
        onClick={onClick}
        className='text-sm cursor-pointer'
      >{`triplecheeseburger's blog`}</h1>
      {(pathName.startsWith('/portfolio') ||
        pathName.startsWith('/guestbook')) && (
        <div className='flex flex-row items-center'>
          <FaChevronRight className='mx-1 w-3 h-3 text-comment-color' />
          <h2 className='text-sm'>{pathName.split('/')[1]}</h2>
        </div>
      )}
      {top &&
        top
          .split('/')
          .slice(1)
          .map((item, index) => {
            if (item.endsWith('.mdx')) item = item.replace('.mdx', '');
            return (
              <div key={index} className='flex flex-row items-center'>
                <FaChevronRight className='mx-1 w-3 h-3 text-comment-color' />
                <h2 className='text-sm'>{item}</h2>
              </div>
            );
          })}
    </section>
  );
}
