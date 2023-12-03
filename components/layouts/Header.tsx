import regice from 'public/images/378.png';

import Image from 'next/image';

//디렉토리와 파일명 보여주기
//상태 ? 경로 파싱 ?
export default function Header() {
  return (
    <div className='flex flex-row content-start w-full h-7 items-center'>
      <Image className='w-4 h-4 m-1' src={regice} alt={'image of regice'} />
      <h1 className='text-sm'>{`triplecheeseburger's blog`}</h1>
    </div>
  );
}
