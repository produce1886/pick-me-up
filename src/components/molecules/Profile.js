import styled from "styled-components";
import Image from "../atoms/Icon/Profile";
import Text from "../atoms/Text";

export default function Profile(props) {
  return (
    <Wrapper>
      <Image
        style={{ width: `${props.size}`, height: `${props.size}` }}
        fill="#d3d4d8"
      ></Image>
      &nbsp;
      <Text level={props.level} color="#232735">
        {props.name}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  align-items: center;
  display: flex;
`;
