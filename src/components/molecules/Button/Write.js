import Icon from "../../atoms/Icon/Write";
import styled from "styled-components";

function WriteButton(props) {
  return (
    <ButtonWrapper onClick={props.openWrite}>
      <Icon style={{ width: "2.4rem", height: "2.4rem" }}></Icon>
    </ButtonWrapper>
  );
}

export default React.memo(WriteButton);

const ButtonWrapper = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 50%;
  right: 10%;
  box-sizing: border-box;
  border-radius: 1.2rem;
  padding: unset;
  z-index: 999;
`;
