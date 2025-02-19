'use client';
import styles from './FaqSection.module.scss';
import { Typography } from '@/components/ui/Typography';
import FAQSection from '@/components/FAQSection/FAQSection';
import { AnchorSection } from '../AnchorSection/AnchorSection';
import React, { useEffect, useState } from 'react';
import { IFetchResponse } from '@/config/fetch.config';
import SearchInput from '@/components/ui/SearchInput';
import { SearchResult } from '../SearchResult/SearchResult';

interface FaqSectionProps {
  faqs: IFetchResponse<FaqResponse>;
}

function getHighlightedText(text: string, highlight: string) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.toLowerCase() === highlight.toLowerCase() ? (
        <span className={styles.accent}>{part}</span>
      ) : (
        part
      )}
    </React.Fragment>
  ));
}

const FaqSection = ({ faqs }: FaqSectionProps) => {
  const [searchText, setSearchText] = useState('');
  const [searchFaq, setSearchFaq] = useState<SectionFaq[] | undefined>(faqs?.data);

  useEffect(() => {
    if (searchText) {
      setSearchFaq(
        JSON.parse(JSON.stringify(faqs?.data ?? []))?.filter((item: SectionFaq) => {
          item.items = item.items.filter(({ title, description }) => {
            if (title.toLowerCase().includes(searchText.toLowerCase())) {
              return true;
            } else if (description.toLowerCase().includes(searchText.toLowerCase())) {
              return true;
            }
          });

          if (item.items.length) return true;
        }),
      );
    } else {
      setSearchFaq(JSON.parse(JSON.stringify(faqs?.data ?? [])));
    }
  }, [searchText]);

  return (
    <>
      <SearchInput
        placeholder='Search'
        className={styles.search}
        value={searchText}
        iconClear={!!searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
      <SearchResult faqs={searchFaq} searchText={searchText} />
      <div className={styles.root}>
        <div className={styles.faqs}>
          <div className={styles.faq}>
            <div>
              {searchFaq?.map(({ name, items }) => (
                <div key={name} id={name}>
                  {!searchText && (
                    <Typography variant={'paragraphs.subtitle_bold'} className={styles.categoryFaq}>
                      {name}
                    </Typography>
                  )}
                  <FAQSection
                    items={items}
                    name=''
                    title={name}
                    getHighlightedText={getHighlightedText}
                    searchText={searchText}
                  />
                </div>
              ))}
            </div>
            {!searchText && <AnchorSection faqs={searchFaq ?? []} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
