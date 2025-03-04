import styles from './Schema.module.scss';
import { HomeSchemas } from '@/services/home-schemas';
import CirculeButtonNumber from '@/components/ui/CirculeButtonNumber/CirculeButtonNumber';
import { foolNumbers } from './constants';
import Link from 'next/link';
import TooltipPolygon from '@/components/ui/TooltipPolygon/TooltipPolygon';

const SchemaPage = async ({ id }: { id: string }) => {
  const floorData = await HomeSchemas.homeSchemas(id);

  return (
    <div className={styles.schema}>
      {floorData.length && (
        <>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={floorData[0].imageUrl} alt={`Floor Plan`} width={4678} height={3308} />
            <svg
              viewBox='0 0 4678 3308'
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
              {floorData[0].Appartements.map(
                ({ id, coordinates, in_stock, room_count, square_meter }) => (
                  <>
                    <Link key={id} href={`/appartement/${id}`}>
                      <TooltipPolygon
                        id={id}
                        coordinates={coordinates}
                        in_stock={in_stock}
                        room_count={room_count}
                        square_meter={square_meter}
                      />
                    </Link>
                  </>
                ),
              )}
            </svg>
          </div>
          <div>
            <div className={styles.floorBlock}>
              <p className={styles.floorNumber}>{id}</p>
              <p className={styles.floorText}>Հարկ</p>
            </div>
            <div className={styles.gridContainer}>
              {foolNumbers.map((number) => (
                <CirculeButtonNumber
                  key={number}
                  numberData={number}
                  isChoiseNumber={id === number}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SchemaPage;
