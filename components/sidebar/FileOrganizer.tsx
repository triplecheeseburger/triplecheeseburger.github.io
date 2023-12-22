import Selectable from '@/components/global/Selectable';

import React, { MouseEventHandler, useEffect } from 'react';
import { FaChevronDown, FaChevronRight, FaRegFile } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa6';

export type FileOrganizerType = 'folder' | 'file';
export default function FileOrganizer({
  depth,
  type,
  name,
  onDoubleClick,
  opened,
}: {
  depth: number;
  type: FileOrganizerType;
  name: string;
  onDoubleClick: MouseEventHandler<HTMLDivElement>;
  opened?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const chevronRef = React.useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = React.useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (e: MouseEvent) => {
    if (chevronRef.current && chevronRef.current.contains(e.target as Node))
      return;
    if (ref?.current && !ref.current.contains(e.target as Node)) {
      setClicked(false);
    }
  };

  const onDoubleClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setClicked(true);
    onDoubleClick(e);
  };

  const icons: { [key in FileOrganizerType]: React.ReactNode } = {
    folder: <FaFolder className='w-4 mx-1' />,
    file: <FaRegFile className='w-4 mx-1' />,
  };

  const gap: React.ReactNode[] = Array(depth)
    .fill(0)
    .map((_, index) => {
      return <div key={name + index + 'gap' + depth} className='w-5' />;
    });

  if (type == 'folder')
    gap[gap.length - 1] = (
      <div
        ref={chevronRef}
        onClick={onDoubleClick}
        key={name + depth + 'chevronU'}
      >
        {opened ? (
          <FaChevronDown className='w-3 h-3 ml-1.5 mr-0.5' />
        ) : (
          <FaChevronRight className='w-3 h-3 ml-1.5 mr-0.5' />
        )}
      </div>
    );

  const toggleClicked = (e: React.MouseEvent) => {
    if (chevronRef.current && chevronRef.current.contains(e.target as Node))
      return;
    setClicked((prev) => !prev);
  };

  return (
    <Selectable clicked={clicked} color={'frost-4'}>
      <section
        ref={ref}
        className='flex flex-row w-full justify-start items-center my-0.5'
        onClick={toggleClicked}
        onDoubleClick={onDoubleClickHandler}
      >
        {gap}
        <p className='flex flex-row align-middle items-center select-none break-keep whitespace-nowrap'>
          {icons[type]}
          {name}
        </p>
      </section>
    </Selectable>
  );
}
