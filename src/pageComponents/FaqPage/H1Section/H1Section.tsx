import { Typography } from '@/components/ui/Typography';
import React from 'react';
import styles from './H1Section.module.scss';

const H1Section = () => {
  return (
    <div>
      <Typography variant='headlines.title2b' textAlign='center' className={styles.h1}>
        Frequently Asked
        <br />
        Questions
      </Typography>
      <Typography variant='paragraphs.caption_medium_m1' textAlign='center' className={styles.h2}>
        Find answers to common questions about our service below.
      </Typography>
    </div>
  );
};

export default H1Section;
