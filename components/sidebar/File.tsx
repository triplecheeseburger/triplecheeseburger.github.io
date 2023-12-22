'use client';

import FileOrganizer from '@/components/sidebar/FileOrganizer';
import usePost from '@/zustand/post';

import { useRouter } from 'next/navigation';

import React from 'react';

export default function File({
  name,
  depth,
  path,
}: {
  name: string;
  depth: number;
  path: string;
}) {
  const router = useRouter();
  const { openPost } = usePost();

  const onDoubleClick = () => {
    openPost(path);
    router.replace('/' + path.replace('.mdx', ''));
  };

  return (
    <FileOrganizer
      onDoubleClick={onDoubleClick}
      depth={depth}
      name={name.replace('.mdx', '')}
      type={'file'}
    />
  );
}
