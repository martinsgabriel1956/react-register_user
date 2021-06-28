import { UserContainer } from "./styles";
import { AddUser } from '../../components/Users/AddUser';

export function Home() {
  return (
    <>
      <AddUser/>
      <UserContainer></UserContainer>
    </>
  );
}