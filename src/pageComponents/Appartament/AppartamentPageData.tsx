'use client';

import { Button } from '@/components/ui/Buttons';
import { Typography } from '@/components/ui/Typography';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppartamentModal from './AppartmentModal';
import { ContactUsService } from '@/services/about-us.service';
import { BidRequest } from '@/services/model';
import CustomModal from '@/components/ui/Modal/Modal';

interface AppartementDatum {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export const AppartamentPageData = ({
  data,
  floorId,
  square_meter,
}: {
  data: AppartementDatum[];
  floorId: number;
  square_meter: string;
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openRet, setOpenRet] = useState(false);
  const [status, setStatus] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(data, 'asdasd');

  const handleSubmitForm = (data: BidRequest) => {
    ContactUsService.Bit(data)
      .then((res) => {
        setOpen(false);
        setStatus(true);
        setOpenRet(true);
        console.log(t('form.success'), res);
      })
      .catch((err) => {
        setOpen(false);
        setStatus(false);
        setOpenRet(true);
        console.error(t('form.failed'), err);
      });
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        gap: '15px',
        padding: '50px',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='paragraphs.caption_bold_1b'>{t('appartament.floorId')}</Typography>
        <Typography variant='paragraphs.caption_bold_1b'>{floorId}</Typography>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='paragraphs.caption_bold_1b'>
          {t('appartament.square_meter')}
        </Typography>
        <Typography variant='paragraphs.caption_bold_1b'>
          {t('appartament.value', { value: square_meter })}
        </Typography>
      </div>
      {data.map((i) => {
        return (
          <div
            key={i.id}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='paragraphs.caption1'>{t(`appartament.${i.name}`)}</Typography>
            <Typography variant='paragraphs.caption_bold_1b'>
              {t('appartament.value', { value: i.value })}
            </Typography>
          </div>
        );
      })}
      <Button variant='primary' onClick={handleOpen}>
        {t('appartament.order')}
      </Button>
      <CustomModal
        open={openRet}
        setOpen={setOpenRet}
        title={t('modal.title')}
        description={t('modal.description')}
        status={status}
      />
      <AppartamentModal open={open} setOpen={setOpen} handleSubmitForm={handleSubmitForm} />
    </div>
  );
};
