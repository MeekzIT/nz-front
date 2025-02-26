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
import { Typography } from '@/components/ui/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const pathname = usePathname();

  const [isOpen, toggle, setIsOpen] = useToggle(false);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('am');

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng') || 'am';

    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;

    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('i18nextLng', selectedLang);
  };

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

      <Typography variant='paragraphs.caption_bold_1b'>{t('welcome')}</Typography>
      <select id='language-select' value={language} onChange={handleLanguageChange}>
        <option value='am'>🇦🇲 Armenian</option>
        <option value='ru'>🇷🇺 Russian</option>
        <option value='en'>🇬🇧 English</option>
      </select>
    </header>
  );
};
