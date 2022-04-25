import React from "react";

import styles from "./CandidateList.module.scss";

const CandidateList = ({data}) => {
  console.log(`${JSON.stringify(data)} from CandidatesList`);

  return (
    <>
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className={`${styles.Card} background-tertiary`}>
              <h2 className="text-card">{d.name}</h2>
              <p className="text-subtitle">{d.comments}</p>
            </div>
          );
        })}
    </>
  );
};

export default CandidateList;
