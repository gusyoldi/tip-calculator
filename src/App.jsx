import { BillInput } from "./BillInput";
import { Output } from "./Output";
import { Reset } from "./Reset";
import { SelectPercentage } from "./SelectPercentage";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * (percentage1 + percentage2);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>

      <BillInput bill={bill} onChangeBill={setBill} />

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        Cuánto te gustó el servicio?
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        Cuánto le gustó el servicio a tu acompañante?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} /> <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
