'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { BurgerButton } from './BurgerButton/BurgerButton';
import { HeaderMobileContent } from './HeaderMobileContent/HeaderMobileContent';
import { RemoveScroll } from 'react-remove-scroll';
import { animateHelper } from '@/utils/helpers/animate.helper';
import styles from './HeaderMobile.module.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface HeaderMobileProps {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobile = ({ isOpen, setIsOpen, toggle }: HeaderMobileProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('am');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;

    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('i18nextLng', selectedLang);
  };

  return (
    <RemoveScroll enabled={isOpen}>
      <div className={styles.container}>
        <button className={styles.button} onClick={toggle}>
          <BurgerButton isOpen={isOpen} />
        </button>
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              variants={animateHelper('animateMenu')}
              animate='open'
              exit='close'
              initial='close'
              transition={{ duration: 0.3 }}
              className={styles.content}
            >
              <HeaderMobileContent setIsOpen={setIsOpen} />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RemoveScroll>
  );
};
