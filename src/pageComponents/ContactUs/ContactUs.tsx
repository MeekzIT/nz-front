'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactUs.module.scss';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import { ContactUsService } from '@/services/plans.service';
import CustomModal from '@/components/ui/Modal/Modal';

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Ֆորման ուղարկված է:', data);
    ContactUsService.aboutUs(data)
      .then((res) => {
        setStatus(true);
        setOpen(true);
        console.log('Success:', res);
      })
      .catch((err) => {
        setStatus(false);
        setOpen(true);
        console.error('Failed:', err);
      });
    reset();
  };

  return (
    <div className={styles.root}>
      {/* Ձախ կողմ - Կոնտակտային ինֆո */}
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
          <span>8502 Preston Rd. Inglewood, Maine 98380</span>
        </div>
        <div className={styles.socialIcons}>
          <FaFacebook className={styles.socialIcon} />
          <FaInstagram className={styles.socialIcon} />
        </div>
      </div>

      {/* Աջ կողմ - Ֆորմա */}
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>ԿԱՊ ՄԵԶ ՀԵՏ</h2>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.inputContainer}>
              <input
                type='text'
                placeholder='Անուն'
                className={styles.input}
                {...register('firstName', {
                  required: 'Անունը պարտադիր է',
                  minLength: { value: 2, message: 'Պետք է լինի առնվազն 2 նիշ' },
                  pattern: { value: /^[Ա-Ֆա-ֆA-Za-z]+$/, message: 'Միայն տառեր են թույլատրված' },
                })}
              />
              {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type='text'
                placeholder='Ազգանուն'
                className={styles.input}
                {...register('lastName', {
                  required: 'Ազգանունը պարտադիր է',
                  minLength: { value: 2, message: 'Պետք է լինի առնվազն 2 նիշ' },
                  pattern: { value: /^[Ա-Ֆա-ֆA-Za-z]+$/, message: 'Միայն տառեր են թույլատրված' },
                })}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
            </div>
          </div>

          <div className={styles.inputContainer}>
            <input
              type='text'
              placeholder='Հեռախոսահամար'
              className={styles.input}
              {...register('phone', {
                required: 'Հեռախոսահամարը պարտադիր է',
                pattern: {
                  value: /^\+?\d{10,15}$/,
                  message: 'Մուտքագրեք վավեր հեռախոսահամար',
                },
              })}
            />
            {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
          </div>

          <div className={styles.inputContainer}>
            <input
              type='email'
              placeholder='Էլ. փոստ'
              className={styles.input}
              {...register('email', {
                required: 'Էլ. փոստը պարտադիր է',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Սխալ էլ. փոստի ձևաչափ',
                },
              })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.inputContainer}>
            <textarea
              placeholder='Հաղորդագրություն'
              className={styles.textarea}
              {...register('message', {
                required: 'Հաղորդագրությունը պարտադիր է',
                minLength: { value: 10, message: 'Հաղորդագրությունը պետք է լինի առնվազն 10 նիշ' },
                maxLength: {
                  value: 500,
                  message: 'Հաղորդագրությունը չի կարող գերազանցել 500 նիշը',
                },
              })}
            ></textarea>
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          <button type='submit' className={styles.submitButton}>
            Ուղարկել
          </button>
        </form>
      </div>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title='Notification'
        description='This is a message from the server.'
        status={status}
      />
    </div>
  );
};

export default ContactUs;
