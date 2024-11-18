export const UserAvatar = () => {
  // Um componente só pode retornar um elemento. Se você quiser retornar mais,
  // vai precisar utilizar fragments <> </>
  return (
    // Fragments não resultam em mais elementos no DOM (diferente de <div>, por exemplo)
    <>
      {/* Toda tag deve ser fechada  */}
      {/* Eventos estão em camelCase  */}
      <img
        src="https://place-hold.it/300"
        alt="Meu avatar"
        onClick={() => alert("Clicado!")}
      />
    </>
  );
};
