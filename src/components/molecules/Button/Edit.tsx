import React from "react";
import styled from "styled-components";
import Colors from "@colors";
import EditIcon from "../../atoms/Icon/Edit";
import Text from "../../atoms/Text";

function Edit() {
  return (
    <Button>
      <Text level={0} color={Colors.BLACK}>
        내 정보 수정
      </Text>
      <EditIcon
        style={{ width: "0.72rem", height: "0.72rem", marginLeft: "0.16rem" }}
        fill={Colors.BLACK}
      ></EditIcon>
    </Button>
  );
}

export default Edit;

const Button = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
`;
