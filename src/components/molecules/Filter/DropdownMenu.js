import ItemWrapper from "./FilterItem";
import Hover from "../../atoms/Filter/FilterItem";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";

export default function DropdownMenu(props) {
  return (
    <Wrapper
      zIndex={props.activeMenu === "align" ? "102" : "200"}
      top="1.7rem"
      left="-0.1rem"
      width="5.4rem"
      height="fit-content"
    >
      {props.activeMenu !== "align" && (
        <Hover backgroundColor="#ffffff" width="5.2rem" height="1.6rem">
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
          width="5.2rem"
          height="1.6rem"
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
