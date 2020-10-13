import Colors from "@colors";
import ItemWrapper from "./FilterItem";
import Hover from "../../atoms/Filter/Item";
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
        <Hover backgroundColor={Colors.WHITE} width="5.2rem" height="1.6rem">
          <Text
            line="1.08rem"
            level={3}
            color={Colors.DEEP_PURPLE}
            align="left"
          >
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
