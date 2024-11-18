import { ChangeEvent, useState } from "react";
import "./App.css";

const App = () => {
  const [logged, setLogged] = useState(false);

  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setLogged(!logged);
  };

  return (
    <div>
      {logged && (
        <>
          <input value={value} onChange={handleChange} />
          <br />
          <h2>{value}</h2>
          <br />
        </>
      )}

      <button onClick={handleClick}>{logged ? "Ocultar" : "Mostrar"}</button>
    </div>
  );
};

export default App;
