import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";
import Icon from "../../atoms/Icon/Plus";

export default function Button(props) {
  return (
    <Wrapper center={true}>
      <Text level={1}>{props.text}</Text>
      <Icon
        style={{
          width: "0.4rem",
          height: "0.4rem",
          margin: "0 0 0 0.2rem",
        }}
        fill="#ffffff"
      ></Icon>
    </Wrapper>
  );
}
