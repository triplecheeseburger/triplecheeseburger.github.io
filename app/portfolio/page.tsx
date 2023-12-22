import { portfolio } from '@/util/portfolio';

import Image from 'next/image';

import React from 'react';

export default function Page() {
  const images = portfolio;
  return (
    <main className='flex w-full h-full flex-col items-center justify-between p-24 overflow-y-scroll'>
      <section className='flex flex-row flex-wrap justify-center'>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`portfolio page ${index + 1}`}
              width={768}
              height={1024}
            />
            <div className='h-4' />
          </div>
        ))}
      </section>
    </main>
  );
}
