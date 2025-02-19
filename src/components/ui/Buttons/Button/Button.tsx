'use client';
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { Spinner } from '../../Loaders/Spinner/Spinner';

export type ButtonVariants = 'accent' | 'primary' | 'secondary' | 'stroke';

export type ButtonSize = 's' | 'l';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: ReactNode;
  type?: HTMLButtonElement['type'];
  counter?: number;
}

export const Button = forwardRef(
  (
    {
      variant,
      size = 'l',
      isLoading,
      icon,
      type = 'button',
      className,
      children,
      disabled,
      counter,
      ...props
    }: IButton,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.button, styles[variant], styles[size], className)}
        type={type}
        disabled={disabled || isLoading}
        {...props}
      >
        {!isLoading ? (
          <>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{children}</span>
            {!!counter && (
              <span
                className={clsx(styles.counter, {
                  [styles.singleDigit]: counter < 10,
                  [styles.twoDigit]: counter >= 10,
                })}
              >
                {counter}
              </span>
            )}
          </>
        ) : (
          <Spinner className={clsx(styles.spinner, styles[variant])} />
        )}
      </button>
    );
  },
);

Button.displayName = 'button';
