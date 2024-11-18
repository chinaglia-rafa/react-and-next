import "./App.css";
import { useState } from "react";

const App = () => {
  // useState é responsável por representar o estado de um componente,
  // e retorna seu valor e uma função para modificá-lo, permitindo
  // que o DOM seja atualizado apenas onde é necessário ao ter seu
  // valor modificado.
  //
  // O instrutor chamou de "memória do componente"
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Add +1</button>
    </div>
  );
};

export default App;
