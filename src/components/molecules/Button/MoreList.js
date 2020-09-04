import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Pill";
import Icon from "../../atoms/Icon/Plus";

function Button(props) {
  return (
    <Wrapper center={true} onClick={props.onClick}>
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

export default React.memo(Button);
