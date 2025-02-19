'use client';

import React, { FC, forwardRef, ReactNode } from 'react';
import { Root, Item, Trigger, Header } from '@radix-ui/react-accordion';
import IconArrow from '@/assets/images/icons/icon-arrow-down.svg';
import styles from './Accordion.module.scss';
import { motion } from 'framer-motion';
import { Typography } from '../Typography';
import useToggle from '@/utils/hooks/useToggle';
import { animateHelper } from '@/utils/helpers/animate.helper';
import clsx from 'clsx';
import IconPlus from '@/assets/images/icons/icon-plus.svg';
import { Variants } from '../Typography/Typography.consts';

type IVariantIconAccordion = 'arrow' | 'plus';

interface IAccordion {
  triggerLabel: ReactNode | string;
  children: ReactNode;
  classNameItem?: string;
  classNameTrigger?: string;
  variantIcon?: IVariantIconAccordion;
  variantTypography: Variants;
}

const Accordion: FC<IAccordion> = ({
  triggerLabel,
  children,
  classNameItem,
  classNameTrigger,
  variantTypography,
  variantIcon = 'arrow',
}) => {
  const [isOpen, toggle] = useToggle();

  return (
    <Root type='single' collapsible>
      <Item value='item-1' className={clsx(styles.item, classNameItem)}>
        <AccordionTrigger onClick={toggle} className={clsx(styles.button, classNameTrigger)}>
          <div className={styles.button}>
            <Typography variant={variantTypography}>{triggerLabel}</Typography>
            <div className={clsx(styles.arrow, styles[variantIcon])}>
              {variantIcon === 'arrow' ? <IconArrow /> : <IconPlus />}
            </div>
          </div>
        </AccordionTrigger>

        <Trigger asChild>
          <motion.div
            variants={animateHelper('animateAccordion')}
            exit='close'
            initial='close'
            onClick={toggle}
            animate={isOpen ? 'open' : 'close'}
          >
            {children}
          </motion.div>
        </Trigger>
      </Item>
    </Root>
  );
};

const AccordionTrigger = forwardRef(({ children, className, ...props }: any, forwardedRef) => (
  <Header className={clsx(styles.header, className)}>
    <Trigger asChild {...props} ref={forwardedRef}>
      {children}
    </Trigger>
  </Header>
));

export default Accordion;
