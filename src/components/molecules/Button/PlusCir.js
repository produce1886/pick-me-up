import Plus from "../../atoms/Icon/PlusCir";
import Text from "../../atoms/Text";
import styled, { css } from "styled-components";

function PlusCirButton(props) {
  return (
    <ButtonWrapper onClick={props.create}>
      <Plus
        style={{ width: "0.8rem", height: "0.8rem", marginRight: "0.4rem" }}
        fill="#8B90A0"
      ></Plus>
      <Text level={1} color="#8b90a0">
        추가
      </Text>
    </ButtonWrapper>
  );
}

export default React.memo(PlusCirButton);

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  width: 5rem;
  height: 1rem;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  padding: 1rem 0 0.5rem 0.5rem;
`;
