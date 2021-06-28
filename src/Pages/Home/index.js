import { UserContainer } from "./styles";
import { AddUser } from '../../components/AddUser';

export function Home() {
  return (
    <>
      <AddUser/>
      <UserContainer></UserContainer>
    </>
  );
}