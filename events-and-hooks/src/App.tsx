import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCountClick = () => {
    // Comandos do tipo setCount() são agrupados e executados "por último"
    // Isso significa que ele vai acumular as alterações em um lote e, apenas
    // no final, renderiza a tela novamente.

    //setCount(count + 1);

    // O state updater tem um parâmetro que representa a "fila" de valores
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <br />
      <button onClick={handleCountClick}>Add +1</button>
    </div>
  );
};

export default App;
