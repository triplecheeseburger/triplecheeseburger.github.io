import regice from '@/public/images/378.png';

import Image from 'next/image';

import React from 'react';

export default function Loading() {
  return (
    <div className='flex w-full h-full flex-col items-center justify-center p-24'>
      <h1 className='text-2xl'>Loading...</h1>
      <Image src={regice} alt={'image of regice'} width={200} height={200} />
    </div>
  );
}
