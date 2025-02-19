import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Container.module.scss';

type IContainer = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

export const Container: FC<IContainer> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};
