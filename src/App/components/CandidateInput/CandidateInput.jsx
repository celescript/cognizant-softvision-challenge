import React from "react";
import {FiX} from "react-icons/fi";

import styles from "./CandidateInput.module.scss";

const CandidateInput = ({setOpen, open, handleSubmit}) => {
  return (
    <form className={`background-primary ${styles.form}`} onSubmit={() => handleSubmit}>
      <input className={styles.inputName} placeholder="Nombre" type="text" />
      <input className={styles.inputComment} placeholder="Comentario" type="text" />
      <div className={styles.submitContainer}>
        <input className={styles.btnSubmit} type="submit" value="Agregar Candidato" />
        <button className={styles.btnClose} onClick={() => setOpen(!open)}>
          <FiX />
        </button>
      </div>
    </form>
  );
};

export default CandidateInput;
