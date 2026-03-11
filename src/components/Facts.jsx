import classes from "./Facts.module.css";

import Fact from "./Fact";
import { useEffect, useState } from "react";

const url = "https://dogapi.dog/api/v2/facts?limit=5";

export default function Facts({ ready, handleSubmitStop }) {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    if (ready) {
      async function fetchFacts() {
        const response = await fetch(url);
        const resData = await response.json();
        setFacts(resData.data);
        handleSubmitStop();
      }
      fetchFacts();
    }
  }, [ready]);

  return (
    <div className={classes.container}>
      {facts.length === 0 && <h2 className={classes.start}>Please press button to get started</h2>}
      {facts.map((fact) => {
        return <Fact key={fact.id} data={fact} />;
      })}
    </div>
  );
}
