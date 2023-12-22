'use client';

import Image from 'next/image';

import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div className='flex w-full h-full flex-col items-center justify-center p-24'>
      <h2>404 NOT FOUND</h2>
      <button onClick={() => reset()}>
        <img
          src={'/images/378.png'}
          alt={'image of regice'}
          width={250}
          height={250}
        />
      </button>
      <a href={'/'}>
        <FaHome className='w-10 h-10' />
      </a>
    </div>
  );
}
