import { MouseEvent } from "react";
import "./App.css";

const App = () => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    alert("botão");
  };

  return (
    <div onClickCapture={() => alert("cliquei na div")}>
      <button onClick={handleClick}>Botão</button>
    </div>
  );
};

export default App;
