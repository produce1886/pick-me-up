import Text from "../../atoms/Text";
import styled, { css } from "styled-components";

function Button(props) {
  return (
    <Wrapper isSelected={props.isSelected} onClick={props.onClick}>
      <Text level={3} weight={props.isSelected && "bold"} color="#232735">
        {props.text}
      </Text>
    </Wrapper>
  );
}

export default React.memo(Button);

const Wrapper = styled.div`
  width: 4.8rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${(props) => css`
    border-bottom: ${props.isSelected && "3px solid #232735"};
  `}
`;
