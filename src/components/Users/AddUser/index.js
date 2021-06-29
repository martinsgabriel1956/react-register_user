import { useState } from "react";

import { FormContainer } from "./styles";

import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import { ErrorModal } from "../../UI/ErrorModal";
import { Wrapper } from "../../Helpers/Wrapper";

export function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  function handleAddUser(event) {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input", 
        message: "Please enter a valid name and age (nom-empty values)."
      })
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  }

  function handleError() {
    setError(null);
    setUsername("");
    setAge("");
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
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
    </Wrapper>
  );
}
