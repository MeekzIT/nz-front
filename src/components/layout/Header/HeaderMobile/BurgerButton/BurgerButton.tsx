import { FC } from 'react';
import styles from './BurgerButton.module.scss';
import clsx from 'clsx';

export const BurgerButton: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={clsx(styles.button, isOpen && styles.open)}>
      <span />
      <span />
      <span />
    </div>
  );
};
