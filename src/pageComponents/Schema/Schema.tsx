import Image from 'next/image';
import styles from './ProjectDetails.module.scss';
import { Typography } from '@/components/ui/Typography';
import { ProjectsService } from '@/services/about-us.service';
import { HomeSchemas } from '@/services/home-schemas';

const SchemaPage = async ({ id }: { id: string }) => {
  const data = await HomeSchemas.homeSchemas(id);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* <img src={floorImage} alt='Floor Plan' width={1600} height={1200} />
      <svg
        viewBox='0 0 1600 1200'
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        {apartments.map(({ id, coords }) => (
          <polygon
            key={id}
            points={coords}
            fill={hoveredId === id ? 'rgba(255, 255, 0, 0.5)' : 'transparent'}
            stroke='yellow'
            strokeWidth={hoveredId === id ? 3 : 1}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </svg> */}
    </div>
  );
};

export default SchemaPage;
