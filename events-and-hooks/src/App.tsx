import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";

const App = () => {
  const [tasks, setTasks] = useState<{ label: string; done: boolean }[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue === "") return;

    // Método 1 - usando spread operator
    setTasks([...tasks, { label: inputValue, done: false }]);

    // Método 2 - .concat()
    //setTasks(tasks.concat([inputValue]));

    // Método 3 - usando uma constante auxiliar
    //const newTasks = [...tasks];
    //newTasks.push(inputValue);
    //setTasks(newTasks);

    setInputValue("");
  };

  const handleDelete = (key: number) => {
    setTasks(tasks.filter((_, index) => index !== key));
  };

  const handleEdit = (key: number) => {
    const newTasks = [...tasks];
    newTasks[key].done = !newTasks[key].done;

    // No caso de states, é só lembrar de sempre editar coisas que não sejam o valor original
    setTasks(newTasks);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>Minha lista de tarefas</h1>

      <button onClick={() => setVisible(!visible)}>Mostrar / Ocultar</button>

      {visible && <Card />}

      <br />
      <br />
      <br />
      <br />

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>Adicionar tarefa</button>
      <br />
      <ul>
        {tasks.map((task, key) => (
          <li key={key}>
            <button onClick={() => handleDelete(key)}>remover</button>
            &nbsp; &nbsp; &nbsp;
            {task.label}
            &nbsp;
            <input
              type="checkbox"
              onChange={() => handleEdit(key)}
              checked={task.done}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
