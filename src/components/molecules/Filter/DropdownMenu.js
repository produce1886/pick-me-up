import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";

export default function DropdownMenu(props) {
  return (
    <Wrapper zIndex={props.activeMenu === "align" ? "102" : "200"}>
      {props.activeMenu != "align" && (
        <Hover backgroundColor="#ffffff">
          <Text line="1.08rem" level={3} color="#9c69e2" align="left">
            전체보기
          </Text>
        </Hover>
      )}
      {props.data.map((value, index) => (
        <ItemWrapper
          key={index}
          item={value}
          setSelected={props.setSelected}
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
