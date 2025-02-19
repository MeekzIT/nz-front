'use client';
import { FC, ReactNode } from 'react';

export interface TabProps {
  className?: string;
  label: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Tab: FC<TabProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Tab;
