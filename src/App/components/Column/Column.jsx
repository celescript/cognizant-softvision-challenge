import React, {useState} from "react";
import {BiPlus} from "react-icons/bi";

import CandidateInput from "../CandidateInput/CandidateInput";
import CandidateList from "../CandidateList/CandidateList";

import styles from "./Column.module.scss";

const Column = ({title, data, id}) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={`background-secondary ${styles.Column}`}>
      <h1 className={`text-title ${styles.title}`}>{title}</h1>

      <CandidateList data={data} id={id} />

      {id === 0 &&
        (open ? (
          <CandidateInput open={open} setOpen={setOpen} />
        ) : (
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <BiPlus />
          </button>
        ))}
    </div>
  );
};

export default Column;
