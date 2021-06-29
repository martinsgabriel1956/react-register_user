import { Backdrop, Modal, Header, Content, Actions } from "./styles";

import { Button } from "../Button";

export function ErrorModal(props) {
  return (
    <Backdrop onClick={props.onConfirm}>
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
    </Backdrop>
  );
}
