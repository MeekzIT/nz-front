import { HomeAvailableSchemas } from '@/services/home-schemas';
import styles from './AvailableApartaments.module.scss';
import Image from 'next/image';
import { AvaiableHomesButtonLInk } from '@/components/ui/AvaiableHomesButtonLInk/AvaiableHomesButtonLInk';

export async function AvailableApartaments() {
  const data = await HomeAvailableSchemas.schemaAvailableHome();

  const floors = data.map(({ floor, count }, index) => ({
    floor,
    index,
    label: `${floor}-ՐԴ ՀԱՐԿ`,
    description: `ՀԱՍԱՆԵԼ Է ${count} ԲՆԱԿԱՐԱՆ`,
  }));

  return (
    <div>
      <div className={styles.appartmentWrapper}>
        <div className={styles.availableHomes}>
          <AvaiableHomesButtonLInk href={'#'} floors={floors} />
          <Image
            className={styles.image}
            src='/assets/home-appartament.svg'
            alt='Apartment'
            height={1123}
            width={883}
          />
        </div>
        <div className={styles.contents}>
          <div className={styles.titleWrapper}>
            <h3>ԱՌԿԱ Է 158 ԲՆԱԿԱՐԱՆ</h3>

            <p>
              Բնակելի համալիրն ունի 22 վերգետնյա հարկ և քառահարկ ստորգետնյա ավտոկայանատեղի։ Շենքում
              առկա է 158 բնակարան։ Կան մի շարք հարմարություններ։ Գնորդները կարող են իրենց
              բնակարանների ներքին հարդարման
            </p>
          </div>
          <Image src='/assets/cuted-house.svg' alt='Apartment' width={737} height={492} />
        </div>
      </div>
    </div>
  );
}

export default AvailableApartaments;
