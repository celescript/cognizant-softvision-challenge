import React from "react";
import {useEffect, useState} from "react";

import api from "../api";
import "./_reset.scss";

import styles from "./App.module.scss";
import Column from "./components/Column/Column";

import {BiMoon, BiSun} from "react-icons/bi";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("init");
  const [candidates, setCandidates] = useState();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    api.candidates.list().then((candidates) => {
      setCandidates(candidates);
      setData(
        candidates.reduce((acc, candidate) => {
          const step = candidate.step;

          if (acc[step] === undefined) acc[step] = [];
          acc[step].push(candidate);

          return acc;
        }, {}),
      );
      setStatus("resolved");
      console.log(candidates);
      console.log(data);
    });
  }, [candidates]);

  const updateCandidateStep = (id, stepData, action) => {
    setCandidates((candidates) =>
      candidates.map((candidate) => {
        if (candidate.id === id) {
          action === "add"
            ? (candidate.step = steps[stepData + 1])
            : (candidate.step = steps[stepData - 1]);
        }
        candidate;
      }),
    );
  };

  if (status === "init") {
    return <span>Cargando...</span>;
  }

  const steps = ["Entrevista inicial", "Entrevista técnica", "Oferta", "Asignacion", "Rechazo"];

  return (
    <div className={`${theme} ${styles.theme}`}>
      <div className={`background-primary ${styles.App}`}>
        <button
          className={`button background-tertiary ${styles.btn}`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <BiSun /> : <BiMoon />}
        </button>
        <main className={`${styles.columnsContainer} `}>
          {steps.map((step) => {
            const candidateStep = steps.indexOf(step);

            return (
              <Column
                key={step}
                candidateStep={candidateStep}
                candidates={candidates}
                data={data[step] || []}
                setCandidates={setCandidates}
                title={step}
                updateCandidateStep={updateCandidateStep}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
