import { Container, User, CardContainer } from "./styles";

export function UsersList(props) {
  return (
    <CardContainer>
      <Container>
        {props.users.map((user) => (
          <User key={user.id}>
            {user.name} ({user.age} years old)
          </User>
        ))}
      </Container>
    </CardContainer>
  );
}
