'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './ContactUs.module.scss';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { ContactUsService } from '@/services/about-us.service';
import CustomModal from '@/components/ui/Modal/Modal';

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const { t } = useTranslation();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(t('form.submitted'), data);
    ContactUsService.aboutUs(data)
      .then((res) => {
        setStatus(true);
        setOpen(true);
        console.log(t('form.success'), res);
      })
      .catch((err) => {
        setStatus(false);
        setOpen(true);
        console.error(t('form.failed'), err);
      });
    reset();
  };

  return (
    <div className={styles.root}>
      {/* Left Side - Contact Info */}
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <a href='tel:5551234567'>
            <FaPhoneAlt className={styles.icon} />
          </a>
          <span>(406) 555-0120</span>
        </div>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <span>Jane.Cooper@gmail.com</span>
        </div>
        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>{t('contact.address')}</span>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>{t('contact.title')}</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.inputContainer}>
              <input
                type='text'
                placeholder={t('form.firstName')}
                className={styles.input}
                {...register('firstName', {
                  required: t('errors.required'),
                  minLength: { value: 2, message: t('errors.minLength', { count: 2 }) },
                  pattern: { value: /^[Ա-Ֆա-ֆA-Za-z]+$/, message: t('errors.lettersOnly') },
                })}
              />
              {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type='text'
                placeholder={t('form.lastName')}
                className={styles.input}
                {...register('lastName', {
                  required: t('errors.required'),
                  minLength: { value: 2, message: t('errors.minLength', { count: 2 }) },
                  pattern: { value: /^[Ա-Ֆա-ֆA-Za-z]+$/, message: t('errors.lettersOnly') },
                })}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
            </div>
          </div>

          <div className={styles.inputContainer}>
            <input
              type='text'
              placeholder={t('form.phone')}
              className={styles.input}
              {...register('phone', {
                required: t('errors.required'),
                pattern: { value: /^\+?\d{10,15}$/, message: t('errors.invalidPhone') },
              })}
            />
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </div>

          <div className={styles.inputContainer}>
            <input
              type='email'
              placeholder={t('form.email')}
              className={styles.input}
              {...register('email', {
                required: t('errors.required'),
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: t('errors.invalidEmail'),
                },
              })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder={t('form.message')}
              className={styles.textarea}
              {...register('message', {
                required: t('errors.required'),
                minLength: { value: 10, message: t('errors.minLength', { count: 10 }) },
                maxLength: { value: 500, message: t('errors.maxLength', { count: 500 }) },
              })}
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          <button type='submit' className={styles.submitButton}>
            {t('form.submit')}
          </button>
        </form>
      </div>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title={t('modal.title')}
        description={t('modal.description')}
        status={status}
      />
    </div>
  );
};

export default ContactUs;
