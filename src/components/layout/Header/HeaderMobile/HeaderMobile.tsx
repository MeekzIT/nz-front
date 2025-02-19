'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { BurgerButton } from './BurgerButton/BurgerButton';
import { HeaderMobileContent } from './HeaderMobileContent/HeaderMobileContent';
import { RemoveScroll } from 'react-remove-scroll';
import { animateHelper } from '@/utils/helpers/animate.helper';
import styles from './HeaderMobile.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface HeaderMobileProps {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobile = ({ isOpen, setIsOpen, toggle }: HeaderMobileProps) => {
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </RemoveScroll>
  );
};
