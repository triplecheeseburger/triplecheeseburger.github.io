import { colorScheme } from '@/util/colorScheme';

import React from 'react';

export default function Selectable({
  children,
  clicked,
  color,
}: {
  children: React.ReactNode;
  clicked: boolean;
  color: string;
}) {
  return (
    <div style={clicked ? { background: colorScheme[color] } : {}}>
      {children}
    </div>
  );
}
