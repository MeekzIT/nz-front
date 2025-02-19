import { Typography } from '@/components/ui/Typography';
import React from 'react';
import styles from './SearchResult.module.scss';

interface SearchResultProps {
  searchText?: string;
  faqs: SectionFaq[] | undefined;
}

export const SearchResult = ({ faqs, searchText }: SearchResultProps) => {
  if (!searchText) return null;

  return (
    <div className={styles.root}>
      <Typography className={styles.title} variant='paragraphs.subtitle_bold'>
        Search Results
      </Typography>
      <div className={styles.wrapper}>
        <Typography
          className={styles.description}
          variant='paragraphs.caption2'
        >{`${faqs?.reduce((accumulator, currentValue) => currentValue.items.length + accumulator, 0)} result for "${searchText}`}</Typography>
        <Typography variant='paragraphs.caption2'>&quot;</Typography>
      </div>
    </div>
  );
};
