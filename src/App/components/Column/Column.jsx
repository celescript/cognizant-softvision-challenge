import React from "react";

import CandidateList from "../CandidateList/CandidateList";

import styles from "./Column.module.scss";

const Column = ({title, data}) => {
  console.log(`${JSON.stringify(data)} from Column`);
  console.log(title);

  return (
    <div className={`background-secondary ${styles.Column}`}>
      <h1 className={`text-title ${styles.title}`}>{title}</h1>
      <CandidateList data={data} />
    </div>
  );
};

export default Column;
