import ItemWrapper from "../Filter/FilterItem";
import Hover from "../../atoms/Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";

export default function DropdownMenu(props) {
  return (
    <Wrapper zIndex={props.activeMenu === "align" ? "102" : "200"}>
      <Hover backgroundColor="#ffffff">
        <Text line="1.08rem" level={3} color="#9c69e2" align="left">
          {props.activeMenu === "align" ? "최신순" : "전체보기"}
        </Text>
      </Hover>
      {props.data.map((value) => (
        <ItemWrapper item={value} setSelected={props.setSelected}></ItemWrapper>
      ))}
    </Wrapper>
  );
}
