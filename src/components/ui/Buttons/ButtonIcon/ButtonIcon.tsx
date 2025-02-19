import { forwardRef, ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import clsx from 'clsx';
import styles from './ButtonIcon.module.scss';
import { Spinner } from '../../Loaders/Spinner/Spinner';

export type ButtonIconVariants = 'primary' | 'stroke';

export type ButtonIconSize = 's' | 'm' | 'l';

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonIconVariants;
  size: ButtonIconSize;
  children: ReactNode;
  type?: HTMLButtonElement['type'];
  counter?: number;
  isLoading?: boolean;
  spinnerClassName?: string;
}

export const ButtonIcon = forwardRef(
  (
    {
      variant,
      size,
      children,
      type = 'button',
      className,
      disabled,
      onClick,
      counter,
      isLoading,
      spinnerClassName,
      ...props
    }: IButtonIcon,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(styles.button, styles[variant], styles[size], className)}
        disabled={disabled}
        onClick={onClick}
        type={type}
        {...props}
      >
        {!isLoading ? (
          <>{children}</>
        ) : (
          <Spinner className={clsx(styles.spinner, spinnerClassName)} />
        )}

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
      </button>
    );
  },
);
