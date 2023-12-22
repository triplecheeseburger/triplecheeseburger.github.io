import Image from 'next/image';

import React from 'react';

export default function Page() {
  return (
    <main className='flex w-full h-full flex-col items-center justify-between p-24 overflow-y-scroll'>
      <section className='flex flex-row flex-wrap justify-center'>
        {Array.from({ length: 15 }).map((image, index) => (
          <div key={index}>
            <img
              src={'/portfolio/' + (index + 1) + '.jpeg'}
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
