import Colors from "@colors";
import ItemWrapper from "./Item";
import Hover from "../../atoms/Filter/Item";
import Wrapper from "../../atoms/Filter/DropDownMenu";
import Text from "../../atoms/Text";
import { FilterItemType } from "./ItemData";

type DropDownMenuProps = {
  isAlign?: boolean;
  isUserInfoEdit?: boolean;
  width: string | number;
  height: string | number;
  handleClick: (arg0: string) => void;
  previousItemTitle?: string;
  data: Array<FilterItemType>;
};

export default function DropDownMenu(props: DropDownMenuProps) {
  return (
    <Wrapper
      zIndex={props.isAlign ? "102" : "200"}
      top={props.height}
      left="-0.1rem"
      width={props.width}
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
      {props.data.map((item: FilterItemType) => (
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
