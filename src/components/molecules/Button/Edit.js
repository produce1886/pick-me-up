import EditIcon from "../../atoms/Icon/Edit";
import Text from "../../atoms/Text";
import styled from "styled-components";

function Edit() {
  return (
    <Button>
      <Text level={0} color="#232735">
        내 정보 수정
      </Text>
      <EditIcon
        style={{ width: "0.72rem", height: "0.72rem", marginLeft: "0.16rem" }}
        fill="#232735"
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
