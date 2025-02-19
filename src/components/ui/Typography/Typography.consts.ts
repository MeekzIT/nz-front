import styles from './Typography.module.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typographyVariants = {
  headlines: {
    title1b: 'title1b',
    title1: 'title1',
    title2b: 'title2b',
    title2: 'title2',
    h4_bold: 'h4_bold',
    h5: 'h5',
    HeadlinesTitle3B: 'HeadlinesTitle3B',
  },
  paragraphs: {
    body: 'body',
    subtitle: 'subtitle',
    subtitleM: 'subtitleM',
    subtitle_semibold: 'subtitle_semibold',
    subtitle_bold: 'subtitle_bold',
    caption1: 'caption1',
    caption2: 'caption2',
    caption_medium: 'caption_medium',
    caption2m: 'caption2m',
    caption_medium_m1: 'caption_medium_m1',
    caption_medium_4m: 'caption_medium_4m',
    caption_regular_3m: 'caption_regular_3m',
    caption_semibold: 'caption_semibold',
    caption_semibold2: 'caption_semibold2',
    caption_semibold3: 'caption_semibold3',
    caption_semibold4: 'caption_semibold4',
    caption_bold: 'caption_bold',
    caption_bold_1b: 'caption_bold_1b',
    caption_bold_2b: 'caption_bold_2b',
  },
  elements: {
    category_bold: 'category_bold',
    category: 'category',
    title: 'title',
    button: 'button',
    input: 'input',
    calendar: 'calendar',
    message: 'message',
    placeholder: 'placeholder',
    caption: 'caption',
    caption_2: 'caption_2',
    button_small: 'button_small',
    limits_tarif: 'limits_tarif',
  },
  search: {
    title: 'title',
    placeholder: 'placeholder',
  },
} as const;

// Определяем типы для каждой группы вариантов
type HeadlinesVariants = `${'headlines'}.${keyof typeof typographyVariants.headlines}`;

type ParagraphsVariants = `${'paragraphs'}.${keyof typeof typographyVariants.paragraphs}`;

type ElementsVariants = `${'elements'}.${keyof typeof typographyVariants.elements}`;

type SearchVariants = `${'search'}.${keyof typeof typographyVariants.search}`;

// Объединяем все типы в один
export type Variants = HeadlinesVariants | ParagraphsVariants | ElementsVariants | SearchVariants;

// Объект для маппинга вариантов на CSS-классы
export const variantClassMap: Record<Variants, string> = {
  'headlines.title1b': styles.headlinesTitle1B,
  'headlines.title1': styles.headlinesTitle1,
  'headlines.title2b': styles.headlinesTitle2B,
  'headlines.title2': styles.headlinesTitle2,
  'headlines.h4_bold': styles.headlinesH4Bold,
  'headlines.h5': styles.headlinesH5,
  'headlines.HeadlinesTitle3B': styles.HeadlinesTitle3B,
  'paragraphs.body': styles.paragraphsBody,
  'paragraphs.subtitle': styles.paragraphsSubtitle,
  'paragraphs.subtitleM': styles.paragraphsSubtitleM,
  'paragraphs.subtitle_semibold': styles.paragraphsSubtitleSemibold,
  'paragraphs.subtitle_bold': styles.paragraphsSubtitleBold,
  'paragraphs.caption1': styles.paragraphsCaption1,
  'paragraphs.caption2': styles.paragraphsCaption2,
  'paragraphs.caption_medium': styles.paragraphsCaptionMedium,
  'paragraphs.caption2m': styles.paragraphsCaption2M,
  'paragraphs.caption_medium_m1': styles.paragraphsCaptionMedium1M,
  'paragraphs.caption_medium_4m': styles.paragraphsCaption4M,
  'paragraphs.caption_regular_3m': styles.paragraphsCaption3M,
  'paragraphs.caption_semibold': styles.paragraphsCaptionSemibold,
  'paragraphs.caption_semibold2': styles.paragraphsCaptionSemibold2,
  'paragraphs.caption_semibold3': styles.paragraphsCaptionSemibold3,
  'paragraphs.caption_semibold4': styles.paragraphsCaptionSemibold4,
  'paragraphs.caption_bold': styles.paragraphsCaptionBold,
  'paragraphs.caption_bold_1b': styles.paragraphsCaptionBold1B,
  'paragraphs.caption_bold_2b': styles.paragraphsCaptionBold2B,
  'elements.category_bold': styles.elementsCategoryBold,
  'elements.category': styles.elementsCategory,
  'elements.title': styles.elementsTitle,
  'elements.button': styles.elementsButton,
  'elements.input': styles.elementsInput,
  'elements.calendar': styles.elementsCalendar,
  'elements.message': styles.elementsMessage,
  'elements.placeholder': styles.elementsPlaceholder,
  'elements.caption': styles.elementsCaption,
  'elements.caption_2': styles.elementsCaption2,
  'elements.button_small': styles.elementsButtonSmall,
  'elements.limits_tarif': styles.elementsLimitTarif,
  'search.title': styles.searchTitle,
  'search.placeholder': styles.searchPlaceholder,
};
