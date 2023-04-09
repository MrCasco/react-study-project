import Axios from "axios";
import { useEffect, useState } from "react";

function CatFacts() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    generateCatFact()
  }, []);

  function generateCatFact() {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  return (
    <div>
      <button onClick={() => generateCatFact()}>Generate Cat Fact</button>
      <h2>{catFact}</h2>
    </div>
  );
}
export default CatFacts;
