'use client';

import { ForwardedRef, forwardRef, MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { IInputProps } from './Input.types';
import { CaptionHint } from '../CaptionHint';
import { Typography } from '../Typography';
import IconClear from '@/assets/images/icons/icon-clear.svg';

export const Input = forwardRef(
  (
    {
      type = 'text',
      leftElement,
      rightElement,
      error,
      label,
      caption,
      containerClassName,
      inputClassName,
      classNamelabelInputWrapper,
      leftElementAction,
      rightElementAction,
      disabled,
      isError,
      noSpaces,
      handleKeyDown,
      onChange,
      iconClear,
      rightElementClassName,
      ...props
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleClear = () => {
      if (onChange) {
        onChange({
          currentTarget: { value: '' },
        } as unknown as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const handleElementAction = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      switch (e.currentTarget.dataset.side) {
        case 'left':
          leftElementAction?.();
          break;
        default:
          rightElementAction?.();
      }
    };

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        event.code === 'Space' &&
        (event.currentTarget.value.trim() === '' || event.currentTarget.selectionStart === 0)
      ) {
        event.preventDefault();
      }

      if (noSpaces && event.code === 'Space') {
        event.preventDefault();
      }

      if (handleKeyDown) {
        handleKeyDown(event);
      }
    };

    return (
      <div className={clsx(styles.container, containerClassName)}>
        <div className={styles.inputWrapper} onBlur={onBlur}>
          {leftElement && (
            <motion.button
              {...(leftElementAction && { whileTap: { scale: 0.95 } })}
              data-side='left'
              onClick={handleElementAction}
              className={clsx(styles.element, styles.left, {
                [styles.clickable]: Boolean(leftElementAction),
              })}
              disabled={isError}
              type='button'
            >
              {leftElement}
            </motion.button>
          )}

          <div
            className={clsx(styles.labelInputWrapper, classNamelabelInputWrapper, {
              [styles.paddingRight]: Boolean(rightElement),
              [styles.paddingLeft]: Boolean(leftElement),
              [styles.disabled]: disabled,
              [styles.focus]: isFocused && label,
              [styles.invalid]: error || isError,
            })}
          >
            <Typography
              variant='paragraphs.caption_semibold3'
              className={clsx(styles.label, {
                [styles.focus]: isFocused || (props.value !== '' && props.value !== ' $'),
              })}
            >
              {label}
            </Typography>
            <input
              type={type}
              ref={ref}
              className={clsx(styles.input, inputClassName, {
                [styles.isCheckedLabel]: label,
                [styles.isCheckedValue]: props.value && label,
                [styles.isFocus]: label,
              })}
              disabled={disabled}
              onFocus={onFocus}
              onKeyDown={onKeyPressHandler}
              onChange={onChange}
              value={props.value}
              {...props}
            />
          </div>

          {iconClear && (
            <button
              type='button'
              className={clsx(styles.clear, {
                [styles.right]: Boolean(rightElement),
              })}
              onClick={handleClear}
            >
              <IconClear />
            </button>
          )}

          {rightElement && (
            <motion.button
              {...(rightElementAction && { whileTap: { scale: 0.95 } })}
              data-side='right'
              className={clsx(styles.element, rightElementClassName, {
                [styles.clickable]: Boolean(rightElementAction),
              })}
              onClick={handleElementAction}
              disabled={isError}
              type='button'
            >
              {rightElement}
            </motion.button>
          )}
        </div>
        <CaptionHint error={error} caption={caption} isFocused={isFocused} />
      </div>
    );
  },
);

Input.displayName = 'Input';
