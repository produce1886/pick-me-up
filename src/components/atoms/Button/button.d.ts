import { TextProps } from "../Text";

type ButtonProps = TextProps & {
  link?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default ButtonProps;
