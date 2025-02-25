import Image from 'next/image';
import { ProjectsService } from '@/services/plans.service';
import styles from './ProjectDetails.module.scss';
import { Typography } from '@/components/ui/Typography';

const ProjectDetailsPage = async ({ id }: { id: string }) => {
  const data = await ProjectsService.getProjectData(Number(id));

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
              {data.data.titleAm}
            </Typography>
            <div className={styles.description}>{data.data.textAm_1}</div>
          </div>
          <div className={styles.images}>
            {data.data.image_11 && (
              <Image
                src={data.data.image_11}
                alt='Main Image'
                className={styles.mainImage}
                width={100}
                height={100}
              />
            )}
            <div className={styles.smallImages}>
              {data.data.image_12 && (
                <Image src={data.data.image_12} alt='Image 12' width={100} height={100} />
              )}
              {data.data.image_13 && (
                <Image src={data.data.image_13} alt='Image 13' width={100} height={100} />
              )}
              {data.data.image_14 && (
                <Image src={data.data.image_14} alt='Image 14' width={100} height={100} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.aboutUsSecond}>
          <div className={styles.titleWrapper}>
            <div className={styles.description}>{data.data.textAm_2}</div>
          </div>
          <div className={styles.images}>
            {data.data.image_14 && (
              <Image src={data.data.image_21} alt='Main Image' className={styles.mainImage} />
            )}
            <div className={styles.smallImages}>
              {data.data.image_12 && (
                <Image src={data.data.image_22} alt='Image 12' width={100} height={100} />
              )}
              {data.data.image_13 && (
                <Image src={data.data.image_23} alt='Image 13' width={100} height={100} />
              )}
              {data.data.image_14 && (
                <Image src={data.data.image_24} alt='Image 14' width={100} height={100} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
