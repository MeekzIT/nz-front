'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { Typography } from '@/components/ui/Typography';
import clsx from 'clsx';
import { Container } from '@/components/ui/Container';
import { useTranslation } from 'react-i18next';

import { FaPhoneAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Logo } from '../Logo/Logo';
import Image from 'next/image';

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      header: t('footer.useful_links'),
      id: 'product',
      links: [
        { id: 1, name: t('footer.about_us'), href: '/about-us' },
        { id: 2, name: t('footer.projects'), href: '/projects' },
        { id: 3, name: t('footer.contact_us'), href: '/contact-us' },
      ],
    },
    {
      header: t('footer.contact'),
      id: 'contact',
      links: [
        {
          id: 1,
          name: (
            <div className={styles.iconsBox}>
              <FaPhoneAlt />
              {t('footer.phone_number')}
            </div>
          ),
          href: '',
        },
        {
          id: 2,
          name: (
            <div className={styles.iconsBox}>
              <MdEmail />
              {t('footer.email')}
            </div>
          ),
          href: '',
        },
        {
          id: 3,
          name: (
            <div className={styles.iconsBox}>
              <FaLocationDot />
              {t('footer.address')}
            </div>
          ),
          href: '',
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: 'https://t.me/cryptonode_io',
    },
    {
      icon: <FaInstagram />,
      href: 'https://t.me/cryptonode_io',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://t.me/cryptonode_io',
    },
    {
      icon: <FaTelegramPlane />,
      href: 'https://t.me/cryptonode_io',
    },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          <Logo />
          {footerLinks.map((link) => (
            <div key={link.header} className={clsx(styles.column, styles[link.id])}>
              <Typography variant='paragraphs.caption_bold_1b' className={styles.header}>
                {link.header}
              </Typography>
              <ul className={styles.list}>
                {link.links.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <Typography className={styles.link}>{item.name}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Typography variant='paragraphs.caption_bold_1b' className={styles.header}>
              {t('footer.follow_us')}
            </Typography>
            <ul className={styles.listSocial}>
              {socialLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className={styles.iconSocial}>{link.icon}</div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.copyright}>
            <a href='https://meekz-it.vercel.app/' target='_blank' style={{ height: '30px' }}>
              <Image
                src={'/assets/images/meekz-it.svg'}
                priority
                alt='logo'
                width={134}
                height={44}
                quality={100}
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
