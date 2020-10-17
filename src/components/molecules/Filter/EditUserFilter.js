import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Icondown from "../../atoms/Icon/Filter/Down";
import ItemWrapper from "./Item";

function EditUserFilter(props) {
  let selectedItemTitle;
  if (props.type === "interest" && props.interest) {
    selectedItemTitle = props.interest;
  } else if (props.type === "area" && props.area) {
    selectedItemTitle = props.area;
  } else {
    selectedItemTitle = props.title;
  }
  const iconStyle = {
    width: "0.6rem",
    height: "0.4rem",
    margin: "0 0 0 0.3rem",
  };
  const [clicked, setClicked] = useState(false);

  const icon = <Icondown style={iconStyle} fill={Colors.BLACK}></Icondown>;
  const setSelectedItemTitle = (itemTitle) => {
    if (itemTitle) {
      props.onClick(itemTitle);
    } else {
      props.onClick("");
    }
  };

  const openMenu = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (props.value) {
      setSelectedItemTitle(props.value);
    }
  }, [props.value]);

  return (
    <FilterWrapper onClick={() => openMenu()}>
      <Text line={props.line} level={1} color={Colors.BLACK}>
        {selectedItemTitle}
      </Text>
      {icon}
      {clicked && (
        <DropdownMenuWrapper
          top={props.type === "area" ? "1.6rem" : "1.4rem"}
          left="0rem"
          zIndex={props.zIndex}
        >
          {props.data.map((value) => (
            <ItemWrapper
              key={value.key}
              item={value}
              setSelectedItemTitle={setSelectedItemTitle}
              selectedItemTitle={selectedItemTitle}
              width="21rem"
              height="1.2rem"
            ></ItemWrapper>
          ))}
        </DropdownMenuWrapper>
      )}
    </FilterWrapper>
  );
}

export default EditUserFilter;

const DropdownMenuWrapper = styled.div`
  ${(props) => css`
    width: 21rem;
    height: fit-content;
    border: none;
    border-radius: 0.4rem;
    background-color: #ffffff;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: left;
    flex: none;
    position: absolute;
    top: ${props.top};
    left: ${props.left};
    box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1),
      0.7rem 0 0.5rem rgba(0, 0, 0, 0.1);
    z-index: ${props.zIndex};
    margin-bottom: 1rem;
  `}
`;
const FilterWrapper = styled.div`
  width: 21.5rem;
  height: 1.2rem;
  font-family: inherit;
  border: none;
  background-color: #f0f1f3;
  border-radius: 0.32rem;
  padding: 0 0.6rem 0 0.8rem;
  margin-right: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;
