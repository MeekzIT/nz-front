import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  description: string;
  status: boolean; // true = success, false = bad request
}

const CustomModal: React.FC<ModalProps> = ({ open, setOpen, title, description, status }) => {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={() => setOpen(false)}>
          <AiOutlineClose size={24} color='#2e4a34' />
        </button>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.iconContainer}>
          {status ? (
            <AiOutlineCheckCircle className={styles.successIcon} size={80} />
          ) : (
            <AiOutlineCloseCircle className={styles.errorIcon} size={80} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
