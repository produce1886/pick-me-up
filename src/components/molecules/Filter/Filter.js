import React, { useState } from "react";
import styled from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Filter/Wrapper";
import IconDownLine from "../../atoms/Icon/Chevron/Down";
import IconUpLine from "../../atoms/Icon/Chevron/Up";
import IconUp from "../../atoms/Icon/Filter/Up";
import IconDown from "../../atoms/Icon/Filter/Down";
import IconX from "../../atoms/Icon/X";
import DropdownMenu from "./DropDownMenu";

function Filter(props) {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selectedItemTitle, setSelectedItemTitle] = useState("");
  const isAlign = props.defaultText === "최신순";

  const handleFilterClick = () => {
    if (selectedItemTitle === "" || props.isUserInfoEdit) {
      setIsFilterOpened(!isFilterOpened);
    }
  };

  const handleItemClick = (itemTitle) => {
    props.onClick(itemTitle);
    setSelectedItemTitle(itemTitle);
  };

  const resetFilter = () => {
    if (isAlign) {
      props.onClick("최신순");
    } else {
      props.onClick("");
    }
    setSelectedItemTitle("");
  };

  const iconStyle = {
    width: "0.6rem",
    height: "0.4rem",
    margin: "0 0 0 0.3rem",
  };
  const iconXStyle = {
    width: "0.8rem",
    height: "0.8rem",
    margin: "0 0 0 0.3rem",
  };

  let icon =
    isAlign || props.isUserInfoEdit ? (
      <IconDown style={iconStyle} fill={Colors.BLACK}></IconDown>
    ) : (
      <IconDownLine style={iconStyle} fill={Colors.DEEP_GREY}></IconDownLine>
    );
  let backgroundColor = Colors.WHITE;
  let border = "0.04rem";

  if (props.isUserInfoEdit) {
    backgroundColor = Colors.LIGHT_GREY;
    border = "none";
  } else if (selectedItemTitle !== "") {
    icon = (
      <XButton onClick={resetFilter}>
        <IconX style={iconXStyle} fill={Colors.BLACK}></IconX>
      </XButton>
    );
    backgroundColor = Colors.GREY;
  } else if (isFilterOpened) {
    if (isAlign || props.isUserInfoEdit) {
      icon = <IconUp style={iconStyle} fill={Colors.BLACK}></IconUp>;
      border = "0.08rem";
    } else {
      icon = (
        <IconUpLine style={iconStyle} fill={Colors.DEEP_GREY}></IconUpLine>
      );
      backgroundColor = Colors.LIGHT_GREY;
    }
  }

  return (
    <Wrapper
      onClick={handleFilterClick}
      width={props.width}
      height={props.height}
      max-height="1.6rem"
      border={border}
      borderColor={isFilterOpened && isAlign ? Colors.PURPLE : Colors.GREY}
      backgroundColor={backgroundColor}
    >
      <Text line={props.line} level={props.level} color={Colors.BLACK}>
        {selectedItemTitle || props.defaultText}
      </Text>
      {icon}
      {isFilterOpened && (
        <DropdownMenu
          width={props.width}
          height={props.height}
          isAlign={isAlign}
          isUserInfoEdit={props.isUserInfoEdit}
          data={props.data}
          handleClick={handleItemClick}
          previousItemTitle={props.previousItemTitle}
        ></DropdownMenu>
      )}
    </Wrapper>
  );
}

export default React.memo(Filter);

const XButton = styled.button`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;
