type Props = {
  roles: { id: number; title: string }[];
};

export const UserRoles = ({ roles }: Props) => {
  return (
    <ul>
      {roles.map((role) => (
        <li key={role.id}>{role.title}</li>
      ))}
    </ul>
  );
};
