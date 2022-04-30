import React, {useState} from "react";
import {BiPlus} from "react-icons/bi";

import CandidateInput from "../CandidateInput/CandidateInput";
import CandidateList from "../CandidateList/CandidateList";

import styles from "./Column.module.scss";

const Column = ({title, data, candidateStep, updateCandidateStep, setCandidates, candidates}) => {
  const initialValues = {
    id: candidates.length + 1,
    name: "",
    step: "Entrevista inicial",
    comments: "",
  };

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newForm = {...form, [name]: value};

    setForm(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCandidates(candidates.push(form));
    setOpen(!open);
    setForm(initialValues);
  };

  return (
    <div className={`background-secondary ${styles.Column}`}>
      <h1 className={`text-title ${styles.title}`}>{title}</h1>

      <CandidateList
        candidateStep={candidateStep}
        data={data}
        updateCandidateStep={updateCandidateStep}
      />

      {candidateStep === 0 &&
        (open ? (
          <CandidateInput
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            open={open}
            setOpen={setOpen}
          />
        ) : (
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <BiPlus />
          </button>
        ))}
    </div>
  );
};

export default Column;
