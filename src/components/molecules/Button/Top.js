import Icon from "../../atoms/Icon/Arrow/up";
import styled from "styled-components";
import Link from "next/link";
import Text from "../../atoms/Text";

export default function Button(props){
    return (
        <Link href={props.link}>
        <A>
            <Wrapper>
                <Icon style={{width: "1rem", height: "1rem", margin: "0.2rem 0 0 0"}} fill="#232735"></Icon>
                <Text line="1rem" level={2} weight="20rem" align="center" color="#232735" deco="underline">TOP</Text>
            </Wrapper>
        </A>
        </Link>
    );
}
const A = styled.a``;

const Wrapper=styled.button`
    width: 1.3rem;
    justify-content: center;
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border: none;
    padding: 0 23rem 0 0;
`;