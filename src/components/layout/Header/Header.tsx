'use client';

import Link from 'next/link';
import { Container } from '../../ui/Container';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import useToggle from '@/utils/hooks/useToggle';
import { Typography } from '@/components/ui/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useIsMobile from './isMobile';

export const Header = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const [isOpen, toggle, setIsOpen] = useToggle(false);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('am');

  const navigationLinks = [
    { name: t('home.home'), href: '/' },
    { name: t('home.projects'), href: '/projects' },
    { name: t('home.about'), href: '/about-us' },
    { name: t('home.contact'), href: '/contact-us' },
  ];

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
      {/* <Container className={styles.container}> */}
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
        <ul>
          <div className={styles.languageSelectWrapper}>
            <select
              className={styles.languageSelect}
              id='language-select'
              value={language}
              onChange={handleLanguageChange}
            >
              <option value='am'>🇦🇲</option>
              <option value='ru'>🇷🇺</option>
              <option value='en'>🇬🇧</option>
            </select>
          </div>
        </ul>
      </ul>
      {isMobile ? (
        <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      ) : undefined}
    </header>
  );
};
