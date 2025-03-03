import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './AvaiableHomesButtonLInk.module.scss';

export interface ILinkButton extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  icon?: ReactNode;
  floors?: { floor: number; label: string; description: string }[];
}

export const AvaiableHomesButtonLInk = forwardRef<HTMLAnchorElement, ILinkButton>(
  ({ className, style, href, icon, floors = [], ...props }, ref) => {
    return (
      <div className={styles.floorMap}>
        {floors.map(({ floor, label, description }, index) => (
          <a
            key={floor}
            href={`/schema/${floor}`}
            ref={ref}
            {...props}
            className={clsx(styles.button, styles.floor)}
            style={{ '--index': index.toString() } as React.CSSProperties}
          >
            <div>
              <span>{label}</span>
              <span>{description}</span>
            </div>
          </a>
        ))}
      </div>
    );
  },
);

AvaiableHomesButtonLInk.displayName = 'ButtonLink';
