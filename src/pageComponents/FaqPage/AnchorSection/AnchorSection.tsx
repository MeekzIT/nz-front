'use client';
import { Typography } from '@/components/ui/Typography';
import styles from './AnchorSection.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const AnchorSection = ({ faqs }: { faqs: FaqResponse }) => {
  const [anchor, setAnchor] = useState('');

  useEffect(() => {
    const event = () => {
      setAnchor(window.location.hash.split('-')[1] ?? window.location.hash);
    };

    window.addEventListener('scroll', event);

    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <div className={styles.anchors}>
      {faqs.map(({ name }) => (
        <Typography
          as='a'
          href={`#${name}`}
          key={name}
          variant='paragraphs.caption_bold_2b'
          className={clsx(anchor.includes(name) && styles.active)}
          onClick={() => setAnchor(name)}
        >
          {name}
        </Typography>
      ))}
    </div>
  );
};
