import styled from "styled-components"
import Text from "../../atoms/Text"
import Wrapper from "../../atoms/Filter/Filter1"
import Icon from "../../atoms/Icon/Chevron/Down"

export default function Filter2(){
    return(
        <Wrapper width="3.4rem" background="#ffffff">
            <Div>
                <Text width="2.4rem" line="1.08rem" level={3} color="#232735">
                    최신순
                </Text>
                <Icon style={{width: "0.4rem", height: "0.2rem"}} fill="#8b90a0"></Icon>
            </Div>
        </Wrapper>
    );
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;