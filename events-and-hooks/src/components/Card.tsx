import { useEffect, useState } from "react";

export const Card = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // essa é a função de callback
    console.log("estou sendo renderizado");

    setFullName(`${firstName} ${lastName}`);

    // esse é o cleanup
    return () => {
      console.log("card sumiu");
    };
  }, [firstName, lastName]);

  return (
    <div>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <br />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />
      Meu nome é {fullName}
    </div>
  );
};
