import { useState } from "react";
import { FormContainer } from "./styles";

import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";

export function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function handleAddUser(event) {
    event.preventDefault();
    const userData = {
      name: username,
      age,
    };
  }

  return (
    <Card>
      <FormContainer onSubmit={handleAddUser}>
        <label htmlFor="username">Usermame</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <Button type="submit">Add User</Button>
      </FormContainer>
    </Card>
  );
}
