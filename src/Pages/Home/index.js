import React, { useState, Fragment } from 'react'
import { AddUser } from "../../components/Users/AddUser";
import { UsersList } from "../../components/Users/UsersList";

export function Home() {
  const [usersList, setUserList] = useState([]);

  function handleAddUser(uName, uAge) {
    setUserList(prevUsersList => [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]);
  }

  return (
    <Fragment>
      <AddUser onAddUser={handleAddUser} />
      <UsersList users={usersList} />
    </Fragment>
  );
}