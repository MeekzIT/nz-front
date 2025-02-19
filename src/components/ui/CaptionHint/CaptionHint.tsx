import { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../Typography';
import clsx from 'clsx';
import styles from './CaptionHint.module.scss';
import { animateHelper } from '../../../utils/helpers/animate.helper';

export type Variants = 'red' | 'neutral' | 'yellow';

interface ICaptionHint {
  caption?: ReactNode;
  error?: ReactNode;
  className?: string;
  isFocused?: boolean;
}

const variantsMap: Record<Variants, string> = {
  neutral: styles.neutral,
  red: styles.red,
  yellow: styles.yellow,
};

export const CaptionHint: FC<ICaptionHint> = ({ caption, error, className, isFocused }) => {
  const captionColor = (): Variants => {
    if (error) {
      return 'red';
    }

    if (isFocused) {
      return 'yellow';
    }

    return 'neutral';
  };

  const getContent = (content: ReactNode) => (
    <motion.div
      variants={animateHelper('animateHeightWithOpacity')}
      initial='hide'
      animate='show'
      exit='hide'
      transition={{ duration: 0.15 }}
    >
      <Typography
        as='div'
        variant='paragraphs.caption_medium_4m'
        className={clsx(styles.validator, variantsMap[captionColor()], className)}
      >
        {content}
      </Typography>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence mode='popLayout'>{error && getContent(error)}</AnimatePresence>
      <AnimatePresence mode='popLayout'>{!error && caption && getContent(caption)}</AnimatePresence>
    </>
  );
};
