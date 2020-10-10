import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Filter/Wrapper";
import Icondownline from "../../atoms/Icon/Chevron/Down";
import Iconupline from "../../atoms/Icon/Chevron/Up";
import Iconup from "../../atoms/Icon/Filter/Up";
import Icondown from "../../atoms/Icon/Filter/Down";
import IconX from "../../atoms/Icon/X";
import DropdownMenu from "./DropdownMenu";

function Filter(props) {
  const iconStyle = {
    width: "0.6rem",
    height: "0.4rem",
    margin: "0 0 0 0.3rem",
  };
  const iconXStyle = {
    width: "0.6rem",
    height: "0.6rem",
    margin: "0 0 0 0.3rem",
  };

  const [clicked, setClicked] = useState(false);
  const [item, setItem] = useState("");

  const setSelected = (item) => {
    if (item) {
      props.onClick(item.title);
    } else {
      props.onClick("");
    }
    setItem(item);
  };

  const resetFilter = () => {
    if (props.title === "최신순") {
      props.onClick("최신순");
    } else {
      props.onClick("");
    }
    setItem("");
    setClicked(false);
  };

  const openMenu = () => {
    if (item) return;
    setClicked(!clicked);
  };

  let background = "#ffffff";
  let icon = <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>;
  let iconAlign = <Icondown style={iconStyle} fill="#232735"></Icondown>;
  let backgroundAlign = "#ffffff";

  useEffect(() => {
    if (!item && props.value) {
      setSelected({ title: props.value });
    }
  }, [props.value]);

  if (item) {
    icon = (
      <Button onClick={resetFilter}>
        <IconX style={iconXStyle} fill="#232735"></IconX>
      </Button>
    );
    iconAlign = (
      <Button onClick={resetFilter}>
        <IconX style={iconXStyle} fill="#232735"></IconX>
      </Button>
    );
    background = "#d3d4d8";
    backgroundAlign = "#d3d4d8";
  } else if (clicked) {
    icon = <Iconupline style={iconStyle} fill="#8b90a0"></Iconupline>;
    background = "#f0f1f3";
    iconAlign = <Iconup style={iconStyle} fill="#232735"></Iconup>;
  } else {
    background = "#ffffff";
    icon = <Icondownline style={iconStyle} fill="#8b90a0"></Icondownline>;
    iconAlign = <Icondown style={iconStyle} fill="#232735"></Icondown>;
  }
  if (props.title === "최신순") {
    return (
      <Wrapper
        onClick={() => openMenu()}
        width="6rem"
        height="1.6rem"
        border={clicked ? "0.08rem" : "0.04rem"}
        borderColor={clicked ? "#c8acee" : "#d3d4d8"}
        backgroundColor={backgroundAlign}
      >
        <Text line="1.08rem" level={3} color="#232735">
          {item ? item.title : props.title}
        </Text>
        {iconAlign}
        {clicked && !item && (
          <DropdownMenu
            activeMenu={props.activeMenu}
            data={props.data}
            setSelected={setSelected}
          ></DropdownMenu>
        )}
      </Wrapper>
    );
  }

  return (
    <Wrapper
      onClick={() => openMenu()}
      width={props.width}
      height={props.height}
      max-height="1.6rem"
      border="0.04rem"
      borderColor="#d3d4d8"
      backgroundColor={background}
    >
      <Text line={props.line} level={props.level} color="#232735">
        {item ? item.title : props.title}
      </Text>
      {icon}
      {clicked && !item && (
        <DropdownMenu
          activeMenu={props.activeMenu}
          data={props.data}
          setSelected={setSelected}
        ></DropdownMenu>
      )}
    </Wrapper>
  );
}

export default React.memo(Filter);

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
