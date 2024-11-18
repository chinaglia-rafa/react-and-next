import { ChangeEvent, useState } from "react";
import "./App.css";

const App = () => {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, firstName: e.target.value });
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName({ ...fullName, lastName: e.target.value });
  };

  return (
    <div>
      <input value={fullName.firstName} onChange={handleChangeFirstName} />
      <br />
      <input value={fullName.lastName} onChange={handleChangeLastName} />
      <br />
      <br />
      <h2>{fullName.firstName + " " + fullName.lastName}</h2>
    </div>
  );
};

export default App;
