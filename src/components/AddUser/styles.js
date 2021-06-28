import styled from "styled-components";

export const UserList = styled.li`
  list-style: none;
  border: 1px solid gray;
  padding: .5rem;
`;

export const Container = styled.form`
  background-color: #fff;
  width: 600px;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  
  h3 {
    padding-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: .25rem .5rem;
    border: 1px solid gray;
  }
  
  label, input {
    margin-bottom: .5rem;
  }
`;