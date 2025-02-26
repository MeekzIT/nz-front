import React from 'react';
import styles from './HomePage.module.scss';
import AvailableApartaments from './AvailableApartaments/AvailableApartaments';

const HomePage = () => {
  return (
    <div className={styles.root}>
      Home Page
      <AvailableApartaments />
    </div>
  );
};

export default HomePage;
