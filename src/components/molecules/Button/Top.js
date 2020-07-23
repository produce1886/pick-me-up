import Icon from "../../atoms/Icon/Arrow/up";
import styled, {css} from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function Button(props){
    return (
            <Wrapper background={props.background}>
                <Icon style={{width: "1rem", height: "1rem", margin: "0.2rem 0 0 0"}} fill="#232735"></Icon>
                <Text line="1rem" level={2} weight="20rem" align="center" color="#232735" deco="underline">TOP</Text>
            </Wrapper>
    );
}
const A = styled.a``;

const Wrapper=styled.button`
${(props) => css`
    width: 1.3rem;
    justify-content: center;
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: ${props.background};
    border: none;
    padding: 0 24rem 0 0;
    `}
`;