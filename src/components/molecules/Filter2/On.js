import styled from "styled-components"
import Text from "../../atoms/Text"
import Wrapper from "../../atoms/Filter/Filter2"
import Icon from "../../atoms/Icon/Filter/Up"

export default function FilterOn2(props){
    return(
        <Wrapper border="0.08rem" color="#c8acee">
            <Div>
                &nbsp;
                <Text width="5rem" line="1.08rem" level={3} color="#232735">
                   {props.word}
                </Text>
                &nbsp;
                <Icon style={{width: "0.6rem", height: "0.4rem"}} fill="#232735"></Icon>
                &nbsp;
            </Div>
        </Wrapper>
    );
}

const Div = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;