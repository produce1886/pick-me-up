import styled from "styled-components"
import Text from "../../atoms/Text"
import Wrapper from "../../atoms/Filter/Filter1"
import Icon from "../../atoms/Icon/Chevron/Down"

export default function FilterOff(props){
    return(
        <Wrapper background="#ffffff">
            <Div>
                &nbsp;
                <Text line="1.08rem" level={3} color="#232735">
                    {props.word}
                </Text>
                &nbsp;
                <Icon style={{width: "0.6rem", height: "0.3rem"}} fill="#8b90a0"></Icon>
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