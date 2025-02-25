'use client';

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function MainPage() {
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
    <Container>
      <Typography variant='paragraphs.caption_bold_1b'>{t('welcome')}</Typography>
      <label htmlFor='language-select'>🌍 Select Language:</label>
      <select id='language-select' value={language} onChange={handleLanguageChange}>
        <option value='am'>🇦🇲 Armenian</option>
        <option value='ru'>🇷🇺 Russian</option>
        <option value='en'>🇬🇧 English</option>
      </select>
    </Container>
  );
}

export default MainPage;
