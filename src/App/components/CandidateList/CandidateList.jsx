import React from "react";
import {BiChevronRight, BiChevronLeft} from "react-icons/bi";

import styles from "./CandidateList.module.scss";

const CandidateList = ({data, candidateStep, updateCandidateStep}) => {
  return (
    <>
      {data &&
        data.map((d) => {
          return (
            <div key={d.id} className={`${styles.Card} background-tertiary`}>
              <div className={styles.text}>
                <h2 className="text-card">{d.name}</h2>
                <p className="text-subtitle">{d.comments}</p>
              </div>
              <div className={styles.buttons}>
                {candidateStep !== 0 && (
                  <button
                    className={styles.btn}
                    onClick={() => updateCandidateStep(d.id, candidateStep, "substract")}
                  >
                    <BiChevronLeft />
                  </button>
                )}
                {candidateStep !== 4 && (
                  <button
                    className={styles.btn}
                    onClick={() => updateCandidateStep(d.id, candidateStep, "add")}
                  >
                    <BiChevronRight />
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CandidateList;
