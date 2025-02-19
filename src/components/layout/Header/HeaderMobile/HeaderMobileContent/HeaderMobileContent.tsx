import clsx from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { navigationLinks } from '../../Header.constants';
import styles from './HeaderMobileContent.module.scss';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import Image from 'next/image';

interface IHeaderDropdownContent {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobileContent: FC<IHeaderDropdownContent> = ({ setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <Container>
      <div className={styles.navList}>
        {navigationLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={handleClose}
            className={clsx(styles.link)}
          >
            <Typography variant='paragraphs.subtitle_semibold'>{item.name}</Typography>
            <Image src='/assets/icon-chevron-right.svg' width={20} height={20} alt='chevron' />
          </Link>
        ))}
      </div>
    </Container>
  );
};
