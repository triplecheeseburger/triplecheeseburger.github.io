'use client';

import Selectable from '@/components/global/Selectable';
import usePost from '@/zustand/post';

import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect } from 'react';
import { FaRegFile } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function TabBar() {
  const { posts, top, setPosts, changeTop, closePost } = usePost();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    changeTop(localStorage.getItem('top') ?? '');
    setPosts(localStorage.getItem('posts')?.split(',') ?? []);
    return () => {
      localStorage.setItem('top', top);
      localStorage.setItem('posts', posts.join(','));
    };
  }, []);

  useEffect(() => {
    if (top) {
      router.replace('/' + top.replace('.mdx', ''));
    } else {
      router.replace('/');
    }
  }, [top, router]);

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    changeTop(e.currentTarget.title);
  };

  if (!pathName.startsWith('/posts')) return null;
  console.log(posts);
  return (
    <div className='flex flex-row justify-start align-middle h-8 overflow-x-scroll no-scrollbar'>
      {posts.map((post) => {
        if (!post) return null;
        return (
          <Selectable key={post} clicked={post === top} color={'polar-night-3'}>
            <p
              title={post}
              onClick={handleClick}
              className='flex flex-row items-center justify-start select-none break-keep px-1.5 h-[28px] pt-1 whitespace-nowrap'
            >
              <FaRegFile className='w-4 mx-1' />
              {post.split('/').pop()?.replace('.mdx', '')}
              <button
                className='ml-1'
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  closePost(post);
                }}
              >
                <IoClose />
              </button>
            </p>
            {post === top && <div className='w-full h-[4px] bg-frost-4' />}
          </Selectable>
        );
      })}
    </div>
  );
}
