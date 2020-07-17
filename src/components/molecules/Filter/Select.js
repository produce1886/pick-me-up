import styled from "styled-components"
import Text from "../../atoms/Text"
import Wrapper from "../../atoms/Filter/Filter1"
import Icon from "../../atoms/Icon/X"

export default function Filter2(){
    return(
        <Wrapper width="4.8rem" background="#d3d4d8">
            <Div>
                <Text width="2.4rem" line="1.08rem" level={3} color="#232735">
                    최신순
                </Text>
                <Icon style={{width: "0.7rem", height: "0.7rem"}} fill="#232735"></Icon>
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