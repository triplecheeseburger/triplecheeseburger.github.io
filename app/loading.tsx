import React from 'react';

// import regice from '';

export default function Loading() {
  return (
    <div className='flex w-full h-full flex-col items-center justify-center p-24'>
      <h1 className='text-2xl'>Loading...</h1>
      <img
        src={'/images/378.png'}
        alt={'image of regice'}
        width={200}
        height={200}
      />
    </div>
  );
}
