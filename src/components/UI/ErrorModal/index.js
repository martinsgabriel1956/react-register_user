import ReactDOM from 'react-dom'
import { BackdropContainer, Modal, Header, Content, Actions } from "./styles";

import { Button } from "../Button";

function Backdrop(props) {
  return <BackdropContainer onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Modal>
      <Header>
        <h3>{props.title}</h3>
      </Header>
      <Content>
        <p>{props.message}</p>
      </Content>
      <Actions>
        <Button onClick={props.onConfirm}>Okay</Button>
      </Actions>
    </Modal>
  );
}

export function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.querySelector('#backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay 
        title={props.title} 
        message={props.message} 
        onConfirm={props.onConfirm}
      />, document.querySelector('#overlay-root'))}
    </>
  );
}
