import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";

export default function MoreButton(props) {
  return (
    <Wrapper>
      <Text level={1} weight={500} color="#ffffff">
        글 작성하기
      </Text>
    </Wrapper>
  );
}
