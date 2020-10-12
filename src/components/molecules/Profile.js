import React from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import ProfileIcon from "../atoms/Icon/Profile";
import Text from "../atoms/Text";

function Profile(props) {
  return (
    <Wrapper>
      {props.profileImage ? (
        <ImageHolder size={props.size}>
          <Img src={props.profileImage}></Img>
        </ImageHolder>
      ) : (
        <ProfileIcon
          style={{
            width: `${props.size}`,
            height: `${props.size}`,
            margin: `${props.margin ? props.margin : "0 0.3rem 0 0"}`,
          }}
          fill={Colors.GREY}
        ></ProfileIcon>
      )}
      {props.name && (
        <Text level={props.level} color={Colors.BLACK} weight={props.weight}>
          {props.name}
        </Text>
      )}
    </Wrapper>
  );
}

export default React.memo(Profile);

const Wrapper = styled.div`
  width: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ImageHolder = styled.div`
  overflow: hidden;
  margin-right: 0.3rem;
  ${(props) => css`
    width: ${props.size};
    height: ${props.size};
    border-radius: ${props.size};
  `}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
