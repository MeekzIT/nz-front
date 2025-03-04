'use client';

import { useRouter } from 'next/navigation';
import styles from './CirculeButtonNumber.module.scss';
import { CirculeButtonNumberProps } from './types';

const CirculeButtonNumber = ({ numberData, isChoiseNumber }: CirculeButtonNumberProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/schema/${numberData}`);
  };
  return (
    <div className={`${styles.circuleButtonContainer} ${isChoiseNumber ? styles.isActived : ''}`} onClick={handleClick}>
      <span className={styles.number}>{numberData}</span>
    </div>
  );
};

export default CirculeButtonNumber;
