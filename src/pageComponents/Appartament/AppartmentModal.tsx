import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.scss';
import { useTranslation } from 'react-i18next';
import { BidRequest } from '@/services/model';

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  handleSubmitForm: (data: BidRequest) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
}

const AppartamentModal: React.FC<ModalProps> = ({ open, setOpen, handleSubmitForm }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    handleSubmitForm(data);
    reset();
  };

  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          <AiOutlineClose size={24} color='#2e4a34' />
        </button>
        <h2 className={styles.title}>{t('appartament.application')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputGroup}>
            <div>
              <input
                type='text'
                placeholder={t('form.firstName')}
                {...register('firstName', { required: t('errors.required') })}
                className={styles.input}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                type='text'
                placeholder={t('form.lastName')}
                {...register('lastName', { required: t('errors.required') })}
                className={styles.input}
              />
              {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
            </div>
          </div>
          <input
            type='tel'
            placeholder={t('form.phone')}
            {...register('phone', { required: t('errors.required') })}
            className={styles.input}
          />
          {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          <button type='submit' className={styles.submitButton}>
            {t('form.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppartamentModal;
