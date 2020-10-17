import Colors from "@colors";
import ItemWrapper from "./Item";
import Hover from "../../atoms/Filter/Item";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";

export default function DropdownMenu(props) {
  return (
    <Wrapper
      zIndex={props.isAlign ? "102" : "200"}
      top={props.height}
      left="-0.1rem"
      width="5.4rem"
      height="fit-content"
    >
      {!props.isAlign && !props.isUserInfoEdit && (
        <Hover
          backgroundColor={Colors.WHITE}
          width={props.width}
          height={props.height}
        >
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
      {props.data.map((item) => (
        <ItemWrapper
          key={item.key}
          {...item}
          handleClick={props.handleClick}
          width={props.width}
          height={props.height}
          previousItemTitle={props.previousItemTitle}
        ></ItemWrapper>
      ))}
    </Wrapper>
  );
}
