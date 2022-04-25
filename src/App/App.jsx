import React from "react";
import {useEffect, useState} from "react";

import api from "../api";
import "./_reset.scss";

import styles from "./App.module.scss";
import Column from "./components/Column/Column";

function App() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("init");

  useEffect(() => {
    api.candidates.list().then((candidates) => {
      setData(
        candidates.reduce((acc, candidate) => {
          const step = candidate.step;

          if (acc[step] === undefined) acc[step] = [];
          acc[step].push(candidate);

          return acc;
        }, {}),
      );
      setStatus("resolved");
    });
  }, []);

  if (status === "init") {
    return <span>Cargando...</span>;
  }

  console.log(data);

  const steps = ["Entrevista inicial", "Entrevista técnica", "Oferta", "Asignacion", "Rechazo"];

  return (
    <div className={`light ${styles.theme}`}>
      <div className={`background-primary ${styles.App}`}>
        <main className={`${styles.columnsContainer} `}>
          {steps.map((step) => {
            return <Column key={step} data={data[step] || []} title={step} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
