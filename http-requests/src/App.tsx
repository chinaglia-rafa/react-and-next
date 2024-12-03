import axios from "axios";
import "./App.css";

function App() {
  const controller = new AbortController();

  const handleClick = async () => {
    await axios("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    });
  };

  const handleStop = () => {
    controller.abort();
  };

  return (
    <div>
      <button onClick={handleClick}>FAZER REQUISIÇÃO</button>
      <br />
      <button onClick={handleStop}>ABORTAR!</button>
    </div>
  );
}

export default App;
