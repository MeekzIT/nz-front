import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.scss';
import IconLogo from '@/assets/logo.svg?url';
import { FC } from 'react';

interface ILogo {
  onClick?: () => void;
}

export const Logo: FC<ILogo> = ({ onClick }) => {
  return (
    <Link href='/' className={styles.logo} onClick={onClick}>
      <Image src={IconLogo} priority alt='logo' width={134} height={44} quality={100} />
    </Link>
  );
};
