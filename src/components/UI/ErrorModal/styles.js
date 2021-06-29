import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border-radius: 0.5rem;
  margin-top: 2rem;
  
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 100%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

export const Header = styled.header`
  background: #4f005f;
  padding: 1rem;

  > h3 {
    margin: 0;
    color: #FFF;
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

