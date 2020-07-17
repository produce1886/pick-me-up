import styled from "styled-components"
import Text from "../../atoms/Text"
import Wrapper from "../../atoms/Filter/Filter2"
import Icon from "../../atoms/Icon/Filter/Up"

export default function Filter2(){
    return(
        <Wrapper border="0.08rem" color="#c8acee">
            <Div>
                <Text width="5rem" line="1.08rem" level={3} color="#232735">
                    최신순
                </Text>
                <Icon style={{width: "0.4rem", height: "0.24rem"}} fill="#232735"></Icon>
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