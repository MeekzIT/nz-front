import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './ButtonLink.module.scss';
import { Typography } from '../../Typography';

export type ButtonLinkVariants = 'accent' | 'primary' | 'secondary' | 'stroke';

export type ButtonLinkSize = 's' | 'l';

export interface ILinkButton extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  size: ButtonLinkSize;
  variant: ButtonLinkVariants;
  icon?: ReactNode;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ILinkButton>(
  ({ size, variant, children, className, href, icon, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx(styles.button, styles[variant], styles[size], className)}
        {...props}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <Typography variant='paragraphs.caption_semibold2' textAlign='center' as='span'>
          {children}
        </Typography>
      </a>
    );
  },
);
