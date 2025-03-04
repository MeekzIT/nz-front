import clsx from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import styles from './HeaderMobileContent.module.scss';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { useTranslation } from 'react-i18next';

interface IHeaderDropdownContent {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobileContent: FC<IHeaderDropdownContent> = ({ setIsOpen }) => {
  const { t } = useTranslation();
  const handleClose = () => setIsOpen(false);

  const navigationLinks = [
    { name: t('home.home'), href: '/' },
    { name: t('home.projects'), href: '/projects' },
    { name: t('home.about'), href: '/about-us' },
    { name: t('home.contact'), href: '/contact-us' },
  ];

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
          </Link>
        ))}
      </div>
    </Container>
  );
};
