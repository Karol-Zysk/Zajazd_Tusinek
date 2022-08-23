import React from "react";
import { ModalProps } from "../../type";
import styles from "./Modal.module.css";

const Modal: React.FC<ModalProps> = ({ isOpenModal }) => {
  return isOpenModal ? (
    <div className={styles.modal}>
      <h1>tel: 89 722 60 39</h1>
    </div>
  ) : null;
};

export default Modal;
