import { UserContainer } from "./styles";
import { AddUser } from "../../components/Users/AddUser";
import { UsersList } from "../../components/Users/UsersList";

export function Home() {
  return (
    <>
      <AddUser/>
      <UsersList users={[]} />
    </>
  );
}