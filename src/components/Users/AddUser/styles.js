import styled from "styled-components";
export const FormContainer = styled.form`
  margin: .75rem auto;
  width: 40rem;
  padding: 1rem;

label {
  display: block;
  font-weight: bold;
}

label, input {
  margin-bottom: .5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  padding: .15rem;
  border: 1px solid #CCC;

  &:focus {
    outline: none;
    border-color: #4F005F;
  }
}
`;