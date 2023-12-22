'use client';

import FileOrganizer from '@/components/sidebar/FileOrganizer';

import React, { useEffect } from 'react';

export default function Folder({
  name,
  depth,
  list,
}: {
  name: string;
  depth: number;
  list: React.JSX.Element[];
}) {
  const [opened, setOpened] = React.useState<boolean>(false);

  const toggleOpened = () => {
    setOpened((prev) => !prev);
    localStorage.setItem(name, opened ? 'true' : 'false');
  };
  const onDoubleClick = () => {
    toggleOpened();
  };

  useEffect(() => {
    setOpened(localStorage.getItem(name) === 'true');
    return () => {
      localStorage.setItem(name, opened ? 'true' : 'false');
    };
  }, []);

  return (
    <div className='inline-block min-w-full'>
      <aside className='w-full flex flex-col'>
        <FileOrganizer
          onDoubleClick={onDoubleClick}
          opened={opened}
          depth={depth}
          name={name}
          type={'folder'}
        />
        {opened && <ul className='flex flex-col'>{list}</ul>}
      </aside>
    </div>
  );
}
