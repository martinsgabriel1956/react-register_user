import { useState, useRef } from "react";

import { FormContainer } from "./styles";

import { Button } from "../../UI/Button";
import { Card } from "../../UI/Card";
import { ErrorModal } from "../../UI/ErrorModal";

export function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  function handleAddUser(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input", 
        message: "Please enter a valid name and age (nom-empty values)."
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      })
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function handleError() {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
      <Card>
        <FormContainer onSubmit={handleAddUser}>
          <label htmlFor="username">Usermame</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
            />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </FormContainer>
      </Card>
    </>
  );
}
