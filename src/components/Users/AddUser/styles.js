import styled from "styled-components";

export const FormContainer = styled.form`
  margin: .75rem auto;
  width: 40rem;

label {
  display: block;
  font-weight: bold;
}

label, input {
  margin-bottom: .5rem;
}

> input {
  font: inherit;
  border: 1px solid #CCC;
  display: block;
  width: 96%;
  padding: .15rem;

  &:focus {
    outline: none;
    border-color: #4F005F;
  }
}
`;