import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 0 && counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  };
  const resetCounter = () => {
    counter = 0;
    setCounter(counter);
  };
  return (
    <>
      <div className="cemter-div">
        <h1>Counter Project</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add One Point</button>
        <br />
        <button onClick={removeValue}>Remove One Point</button>
        <br />
        <button onClick={resetCounter}>Reset Counter</button>
      </div>
    </>
  );
}

export default App;
