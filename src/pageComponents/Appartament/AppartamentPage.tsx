import React from 'react';
import { SingleAppartament } from '@/services/appartement-schemas';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { AppartamentPageData } from './AppartamentPageData';

export const AppartamentPage = async ({ id }: { id: string }) => {
  const data = await SingleAppartament.getSingle(id);

  if (!data) return;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ width: '50%', height: '100%' }}>
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_black_white}`}
              alt='Image one'
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.image_design}`}
              alt='Image two'
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          }
          style={{ width: '100%', height: '50%' }}
        />
      </div>
      <div
        style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <AppartamentPageData
          data={data.AppartementData}
          floorId={data.floorId}
          square_meter={data.square_meter}
        />
      </div>
    </div>
  );
};
