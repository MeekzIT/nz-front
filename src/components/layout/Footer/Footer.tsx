import Link from 'next/link';
import { footerLinks, socialLinks } from './Footer.data';
import styles from './Footer.module.scss';
import { Typography } from '@/components/ui/Typography';
import clsx from 'clsx';
import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          {footerLinks.map((link) => (
            <div key={link.header} className={clsx(styles.column, styles[link.id])}>
              <Typography variant='paragraphs.caption_bold_1b' className={styles.header}>
                {link.header}
              </Typography>
              <ul className={styles.list}>
                {link.links.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <Typography variant='paragraphs.caption_regular_3m' className={styles.link}>
                        {item.name}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.contacts}>
          <div className={styles.socials}>
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div className={styles.icon}>
                  <Image
                    src={`/assets/socials/icon-${link.name.toLowerCase()}.svg`}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.copyright}>
            <Typography
              textAlign='right'
              variant='paragraphs.caption_bold_2b'
            >{`©${new Date().getFullYear()} Cryptonode.io`}</Typography>
            <Typography textAlign='right' variant='paragraphs.caption_bold_2b'>
              All rights reserved.
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
