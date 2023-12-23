'use client';

import usePost from '@/zustand/post';

import { usePathname } from 'next/navigation';

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function HomeButton() {
  const { top } = usePost();
  const pathName = usePathname();
  const onClick = () => {
    location.href = '/';
  };

  return (
    <section className='flex flex-row content-start w-full h-full items-center'>
      <img
        onClick={onClick}
        className='w-4 h-4 m-1 cursor-pointer'
        src={'/images/378.png'}
        alt={'image of regice'}
      />
      <h1
        onClick={onClick}
        className='text-sm cursor-pointer'
      >{`triplecheeseburger's blog`}</h1>
      {pathName !== '/' && (
        <div className='flex flex-row items-center'>
          <FaChevronRight className='mx-1 w-3 h-3 text-comment-color' />
          <h2 className='text-sm'>{pathName.split('/')[1]}</h2>
        </div>
      )}
      {pathName.startsWith('/posts') &&
        top &&
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
