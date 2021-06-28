import { useState } from "react";
import { FormContainer } from "./styles";

import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import { ErrorModal } from "../../UI/ErrorModal";

export function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function handleAddUser(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 1) return;

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  }

  return (
    <div>
      <ErrorModal title="An error occurred!" message="Something went wrong!"/>
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
    </div>
  );
}
