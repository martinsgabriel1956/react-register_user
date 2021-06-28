import { Backdrop, Modal, Header, Content, Actions } from "./styles";

import { Button } from "../Button";

export function ErrorModal(props) {
  return (
    <Backdrop>
      <Modal>
        <Header>
          <h3>{props.title}</h3>
        </Header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Actions>
          <Button>Ok</Button>
        </Actions>
      </Modal>
    </Backdrop>
  );
}
