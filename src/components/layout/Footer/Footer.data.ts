import { hr } from 'framer-motion/client';

export const footerLinks = [
  {
    header: 'Օգտակար հղումներ',
    id: 'product',
    links: [
      { name: 'Մեր մասին', href: '/about us' },
      { name: 'Նախագծեր', href: '/projects' },
      { name: 'Կապ մեզ հետ', href: '/contact-us' },
    ],
  },

  {
    header: 'Company',
    id: 'company',
    links: [{ name: 'FAQ', href: '/faq' }],
  },
  {
    header: 'Կապ մեզ հետ',
    id: 'contact',
    links: [
      { name: '0(406) 555-0120', href: '' },
      { name: 'Jane.Cooper@gmail.com', href: '' },
      { name: '8502 Preston Rd. Inglewood, Maine 98380', href: '' },
    ],
  },
  {
    header: 'Հետևեք մեզ',
    id: 'developers',
    links: [
      { name: 'FB', href: '' },
      // { name: 'Get Started', href: process.env.NEXT_PUBLIC_APP_URL },
    ],
  },
];

export const socialLinks = [
  {
    name: 'Telegram',
    href: 'https://t.me/cryptonode_io',
  },
];
