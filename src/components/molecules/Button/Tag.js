import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Tag";
import styled from "styled-components";
import IconX from "../../atoms/Icon/X";

export default function Button(props) {
  let background = "#c8acee";
  let bordercolor = "#c8acee";
  let textcolor = "#fff";
  if (props.tagtype === "modalwrite") {
    background = "#f0f1f3";
    bordercolor = "#d3d4d8";
    textcolor = "#232735";
  } else if (props.tagtype === "modalview") {
    background = "#fff";
    bordercolor = "#d3d4d8";
    textcolor = "#d3d4d8";
  }
  return (
    <Wrapper backgroundColor={background} borderColor={bordercolor}>
      <Div>
        <Text level={0} color={textcolor} align="center">
          {props.text}
        </Text>
        {props.ismodal && (
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              props.removeTag(props.key);
            }}
          >
            <IconX
              style={{
                width: "0.65rem",
                height: "0.65rem",
                margin: "0.15rem 0 0 0.3rem",
              }}
              fill="#232735"
            ></IconX>
          </IconButton>
        )}
      </Div>
    </Wrapper>
  );
}

const IconButton = styled.div`
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  display: flex;
`;
const Div = styled.div`
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  display: flex;
`;
