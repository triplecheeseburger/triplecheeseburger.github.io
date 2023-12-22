export default function Home() {
  return (
    <main className='flex w-full h-full flex-col items-center justify-center p-24'>
      {'이 블로그는 Next.js와 TailwindCSS를 사용하여 만들어졌습니다.'}
      <br />
      {'이 블로그는 PC 화면에 최적화 되어 있습니다. 당분간 모바일 금지!'}
      <br />
      {
        '이 블로그는 아직 개발 중입니다. 혹시라도 정상적으로 작동하지 않는다면 새로고침을 한 번 눌러주세요!'
      }
    </main>
  );
}
