import styled from "styled-components";

export const ButtonComponent = styled.button`
  font: inherit;
  background-color: #4f005f;
  border: 1px solid #4f005f;
  padding: .25rem 1rem;
  color: #FFF;
  cursor: pointer;

  &:hover,
  &:active{
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;