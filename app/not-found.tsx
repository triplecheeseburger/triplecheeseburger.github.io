'use client';

import Image from 'next/image';

import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className='flex w-full h-full flex-col items-center justify-center p-24'>
      <h2>404 NOT FOUND</h2>
      <img
        src={'/images/378.png'}
        alt={'image of regice'}
        width={250}
        height={250}
      />
      <a href={'/'}>
        <FaHome className='w-10 h-10' />
      </a>
    </div>
  );
}
