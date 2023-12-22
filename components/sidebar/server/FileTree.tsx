import File from '@/components/sidebar/File';
import Folder from '@/components/sidebar/Folder';
import { randomUUID } from 'crypto';
import { readdirSync } from 'fs';

import React from 'react';

export default async function FileTree() {
  const generateFileTree = (dirname = 'posts/', depth = 1) => {
    const folders: React.JSX.Element[] = [];
    const files: React.JSX.Element[] = [];
    readdirSync(dirname, { withFileTypes: true }).forEach((item) => {
      if (item.isDirectory()) {
        const path = dirname + item.name + '/';
        folders.push(
          <Folder // some folder component
            key={randomUUID()}
            name={item.name}
            depth={depth}
            list={generateFileTree(path, depth + 1)}
          />
        );
      } else {
        const path = dirname + item.name;
        files.push(
          <File key={randomUUID()} name={item.name} depth={depth} path={path} />
        );
      }
    });
    return [...folders, ...files];
  };

  return (
    <ul className='w-full h-full overflow-x-scroll'>{generateFileTree()}</ul>
  );
}
