import { useState } from "react";
import "./App.css";

function App() {
  const [increment, setIncrement] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + increment);

  return (
    <>
      <div className="datecounter">
        <h3>DATE COUNTER </h3>

        <div className="btns">
          <button className="increment" onClick={() => setStep((s) => s + 1)}>
            +
          </button>
          <div>Steps:{step}</div>

          <button className="decrement" onClick={() => setStep((s) => s - 1)}>
            -
          </button>
        </div>
        <div className="btns">
          <button
            className="increment"
            onClick={() => setIncrement((s) => s + step)}
          >
            +
          </button>
          <div>Count:{increment}</div>

          <button
            className="decrement"
            onClick={() => setIncrement((s) => s - step)}
          >
            -
          </button>
        </div>

        <p>
          {Math.abs(increment)} days{" "}
          {increment >= 0 ? " from Today" : `${increment < 0 ? "Ago" : ""}`} is{" "}
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;
