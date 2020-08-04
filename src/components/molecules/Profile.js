import styled from "styled-components";
import Image from "../atoms/Icon/Profile";
import Text from "../atoms/Text";
import ImageHolder from "../atoms/ImageHolder/Profile";

export default function Profile(props) {
  return (
    <Wrapper>
      {props.profileImage ? (
        <ImageHolder size={props.size}>
          <Img src={props.profileImage}></Img>
        </ImageHolder>
      ) : (
        <Image
          style={{
            width: `${props.size}`,
            height: `${props.size}`,
            marginRight: "0.3rem",
          }}
          fill="#d3d4d8"
        ></Image>
      )}
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
