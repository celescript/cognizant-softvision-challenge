import React from "react";
import {useEffect, useState} from "react";

import api from "../api";
import "./_reset.scss";

import styles from "./App.module.scss";
import Column from "./components/Column/Column";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("init");
  const [candidates, setCandidates] = useState();

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
  }, []);

  if (status === "init") {
    return <span>Cargando...</span>;
  }

  const steps = ["Entrevista inicial", "Entrevista técnica", "Oferta", "Asignacion", "Rechazo"];

  return (
    <div className={`light ${styles.theme}`}>
      <div className={`background-primary ${styles.App}`}>
        <main className={`${styles.columnsContainer} `}>
          {steps.map((step) => {
            const id = steps.indexOf(step);

            return <Column key={step} data={data[step] || []} id={id} title={step} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
