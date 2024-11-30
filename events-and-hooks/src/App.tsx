import { useRef, useState } from "react";

import "./App.css";

const App = () => {
  const element = useRef<HTMLInputElement | null>(null);

  const [time, setTime] = useState(0);

  let intervalHandler = useRef(0);

  const handleStart = () => {
    if (intervalHandler.current) handleStop();

    const intervalId = setInterval(() => {
      console.log("interval");
      setTime((t) => t + 1);
    }, 1000);

    intervalHandler.current = intervalId;
  };

  const handleStop = () => {
    clearInterval(intervalHandler.current);
  };

  const handleClick = () => {
    // current é como o useRef acessa o elemento em si
    if (!element.current) return;

    element.current.focus();
  };

  return (
    <div>
      <h2>{time}</h2>

      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={handleStart}>Começar</button>
        <button onClick={handleStop}>Parar</button>
      </div>
    </div>
  );
};

export default App;
