import { Container } from '@/components/ui/Container';
import React from 'react';

import styles from './ProjectsPage.module.scss';

const ProjectsPage = async () => {
  return (
    <div className={styles.root}>
      <Container>Մեր նախագծերը</Container>
    </div>
  );
};

export default ProjectsPage;
