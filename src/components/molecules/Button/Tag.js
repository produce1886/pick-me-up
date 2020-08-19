import Text from "../../atoms/Text";
import Wrapper from "../../atoms/Button/Tag";
import Link from "next/link";
import styled from "styled-components";
import IconX from "../../atoms/Icon/X";

export default function Button(props) {
  return (
    <Link href={props.link}>
      <A>
        <Wrapper
          backgroundColor={props.ismodal === "modal" ? "#f0f1f3" : "#c8acee"}
        >
          <Div>
            <Text
              level={0}
              color={props.ismodal === "modal" ? "#232735" : "#fff"}
              align="center"
            >
              {props.text}
            </Text>
            {props.ismodal && (
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  props.removeTag(props.key);
                }}
              >
                <IconX
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    margin: "0.25rem 0 0 0.3rem",
                  }}
                  fill="#232735"
                ></IconX>
              </IconButton>
            )}
          </Div>
        </Wrapper>
      </A>
    </Link>
  );
}

const A = styled.a``;

const IconButton = styled.div`
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  display: flex;
`;
const Div = styled.div`
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  display: flex;
`;
