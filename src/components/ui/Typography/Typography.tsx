import { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import styles from './Typography.module.scss';
import { variantClassMap, Variants } from './Typography.consts';

// Определяем базовые типы
type BaseTypographyProps<E extends ElementType = ElementType> = {
  as?: E;
  variant?: Variants;
  textDecoration?: 'underline' | 'none';
  textAlign?: 'center' | 'left' | 'right';
  color?: 'grey' | 'white' | string;
};

// Определяем типы для каждого компонента
type TypographyProps<E extends ElementType> = BaseTypographyProps<E> &
  Omit<ComponentProps<E>, keyof BaseTypographyProps>;

export const Typography = <E extends ElementType = 'p'>(props: TypographyProps<E>) => {
  const {
    children,
    className,
    as: Tag = 'p',
    variant = 'paragraphs.body',
    textAlign = 'left',
    textDecoration = 'none',
    color,
    ...rest
  } = props;

  return (
    <Tag
      className={clsx(
        variantClassMap[variant],
        styles[textAlign],
        styles[textDecoration],
        color && styles[color],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
