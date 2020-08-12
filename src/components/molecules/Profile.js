import styled, {css} from "styled-components";
import Image from "../atoms/Icon/Profile";
import Text from "../atoms/Text";
import ImageHolder from "../atoms/ImageHolder/Profile";
import Wrapper from "../atoms/Profile";
export default function Profile(props) {
  return (
    <Wrapper direction={props.direction}>
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
