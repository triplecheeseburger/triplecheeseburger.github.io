'use client';

import { useEffect, useState } from 'react';

export default function LineBox() {
  const [lines, setLines] = useState<number>(0);
  const getMDXHeight = () => {
    const mdx = document.getElementById('mdx');
    if (mdx) {
      setLines(Math.floor(mdx.clientHeight / 24));
    }
  };

  useEffect(() => {
    getMDXHeight();
    window.addEventListener('resize', getMDXHeight);
    return () => {
      window.removeEventListener('resize', getMDXHeight);
    };
  }, [lines]);

  return (
    <div
      className='flex flex-col ml-2 mr-2 h-fit'
      style={{ height: `${lines * 24}px` }}
    >
      {Array.from(Array(lines).keys()).map((line) => (
        <div
          key={line}
          className='align-middle text-comment-color pr-8 border-r border-r-polar-night-3'
        >
          {line + 1}
        </div>
      ))}
    </div>
  );
}

// 'use client';
//
// import { useEffect, useState } from 'react';
//
// export default function LineBox() {
//   const [lineHeights, setLineHeights] = useState<number[]>([]);
//
//   const getMDXHeight = () => {
//     const mdx = document.getElementById('mdx');
//     if (mdx) {
//       const children = mdx.children;
//       console.log(children.length);
//       const heights = Array.from(children).map((child) => {
//         const style = window.getComputedStyle(child);
//         console.log(child.clientHeight);
//         return (
//           child.clientHeight +
//           parseInt(style.marginTop) +
//           parseInt(style.marginBottom)
//         );
//       });
//       setLineHeights(heights);
//     }
//   };
//
//   useEffect(() => {
//     getMDXHeight();
//     window.addEventListener('resize', getMDXHeight);
//     return () => {
//       window.removeEventListener('resize', getMDXHeight);
//     };
//   }, []);
//
//   return (
//     <div className='flex flex-col ml-2 mr-2 h-full'>
//       {lineHeights.map((height, index) => (
//         <div
//           key={index}
//           className='justify-start align-middle text-comment-color pr-8 border-r border-r-polar-night-3'
//           style={{ height: height !== 0 ? `${height}px` : '24px' }}
//         >
//           {index + 1}
//         </div>
//       ))}
//     </div>
//   );
// }
