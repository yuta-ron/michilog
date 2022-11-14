import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Layout ({ children, ...props }: Props) {
  return <div {...props}>{children}</div>;
}
