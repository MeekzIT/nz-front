'use client';

import Link from 'next/link';
import { Container } from '../../ui/Container';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';
import { navigationLinks } from './Header.constants';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import useToggle from '@/utils/hooks/useToggle';

export const Header = () => {
  const pathname = usePathname();

  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo onClick={() => (isOpen ? setIsOpen(false) : null)} />
        <ul className={styles.navigation}>
          {navigationLinks.map((item) => (
            <li
              key={item.name}
              className={clsx(styles.link, { [styles.active]: pathname === item.href })}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      </Container>
    </header>
  );
};
