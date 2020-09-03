import styled from "styled-components";
import Image from "../atoms/Icon/Profile";
import Text from "../atoms/Text";
import ImageHolder from "../atoms/ImageHolder/Profile";
import Wrapper from "../atoms/Profile";

function Profile(props) {
  return (
    <Wrapper>
      {props.profileImage ? (
        <ImageHolder size={props.size}>
          <img
            src={props.profileImage}
            style={{
              width: `${props.size}`,
              height: `${props.size}`,
              borderRadius: `${props.size}`,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
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
      <Text level={props.level} color="#232735" weight={props.weight}>
        {props.name}
      </Text>
    </Wrapper>
  );
}

export default React.memo(Profile);

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
