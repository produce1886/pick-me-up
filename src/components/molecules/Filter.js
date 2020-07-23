import { useState } from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Filter";
import Icondownline from "../atoms/Icon/Chevron/Down";
import Iconupline from "../atoms/Icon/Chevron/Up";
import Iconup from "../atoms/Icon/Filter/Up";
import Icondown from "../atoms/Icon/Filter/Down";

export default function Filter(props) {
  const [clicked, setClicked] = useState(false);
  const iconStyle = {
    width: "0.6rem",
    height: "0.4rem",
    margin: "0 0 0 0.4rem",
  };

  if (props.title === "최신순") {
    return (
      <Wrapper
        onClick={() => setClicked(!clicked)}
        width="6rem"
        height="1.6rem"
        border={clicked ? "0.08rem" : "0.04rem"}
        borderColor={clicked ? "#c8acee" : "#d3d4d8"}
        backgroundColor="#ffffff"
      >
        <Text line="1.08rem" level={3} color="#232735">
          {props.title}
        </Text>
        {clicked ? (
          <Iconup style={iconStyle} fill="#232735"></Iconup>
        ) : (
          <Icondown style={iconStyle} fill="#232735"></Icondown>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper
      onClick={() => setClicked(!clicked)}
      width="fit-content"
      height="1.6rem"
      border="0.04rem"
      borderColor="#d3d4d8"
      backgroundColor={clicked ? "#f0f1f3" : "#ffffff"}
    >
      <Text line="1.08rem" level={3} color="#232735">
        {props.title}
      </Text>
      {clicked ? (
        <Iconupline style={iconStyle} fill="#8b90a0"></Iconupline>
      ) : (
        <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>
      )}
    </Wrapper>
  );
}
