import React from 'react';
import { AboutService } from '@/services/plans.service';

import styles from './AboutUs.module.scss';
import { Typography } from '@/components/ui/Typography';

const AboutUs = async () => {
  const data = await AboutService.aboutUs();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.aboutUsFirst}>
          <div className={styles.titleWrapper}>
            <Typography
              className={styles.title}
              color='#08412E'
              variant='headlines.title2b'
              textAlign='left'
            >
              Mer Masin
            </Typography>
            <div className={styles.description}>{data.data.textAm_1}</div>
          </div>
          <div className={styles.images}>
            <img src={data.data.image_11} alt='Main Image' className={styles.mainImage} />
            <div className={styles.smallImages}>
              <img src={data.data.image_12} alt='Image 12' />
              <img src={data.data.image_13} alt='Image 13' />
              <img src={data.data.image_14} alt='Image 14' />
            </div>
          </div>
        </div>
        <div className={styles.aboutUsSecond}>
          <div className={styles.titleWrapper}>
            <div className={styles.description}>{data.data.textAm_2}</div>
          </div>
          <div className={styles.images}>
            <img src={data.data.image_11} alt='Main Image' className={styles.mainImage} />
            <div className={styles.smallImages}>
              <img src={data.data.image_12} alt='Image 12' />
              <img src={data.data.image_13} alt='Image 13' />
              <img src={data.data.image_14} alt='Image 14' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
