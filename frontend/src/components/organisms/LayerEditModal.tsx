import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/modal.module.scss';

interface LayerEditModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const LayerEditModal = (props: LayerEditModalProps) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={() => {}}
      onRequestClose={props.onRequestClose}
      className={`${styles.mymodal} relative max-w-2xl h-full md:h-auto bg-white rounded-lg shadow dark:bg-gray-700`}
      overlayClassName={`${styles.myoverlay}`}
      closeTimeoutMS={500}
    >
      <div className='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'></div>
    </Modal>
  );
};
