type Props = {
  src: string;
};

export const UserAvatar = ({ src }: Props) => {
  // Um componente só pode retornar um elemento. Se você quiser retornar mais,
  // vai precisar utilizar fragments <> </>
  return (
    // Fragments não resultam em mais elementos no DOM (diferente de <div>, por exemplo)
    <>
      {/* Toda tag deve ser fechada  */}
      {/* Eventos estão em camelCase  */}
      <img src={src} alt="Meu avatar" onClick={() => alert("Clicado!")} />
    </>
  );
};
