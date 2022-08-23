import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { ModalProps } from "../../type";
import { BiPhoneCall } from "react-icons/bi";
import styles from "./Modal.module.css";

const Modal: React.FC<ModalProps> = ({ isOpenModal, toggleModal }) => {
  return isOpenModal ? (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        className={styles.container}
        onClick={toggleModal}
      >
        <div className={styles.modal}>
          <FaTimes className={styles.icon} onClick={toggleModal} />
          <h1 className={styles.text}><BiPhoneCall className={styles.phone_icon}/> 89 722 60 39</h1>
        </div>
      </motion.div>
    </>
  ) : null;
};

export default Modal;
