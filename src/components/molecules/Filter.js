import styled from "styled-components"
import Text from "../atoms/Text"
import Wrapper from "../atoms/Filter"
import Icondownline from "../atoms/Icon/Chevron/Down"
import Iconupline from "../atoms/Icon/Chevron/Up"
import Iconup from "../atoms/Icon/Filter/Up"
import Icondown from "../atoms/Icon/Filter/Down"
import Row from "../atoms/Row"

export default function Filter(props){
    return(
        <Row>
            {props.type==="bigoff" && ( 
                <Wrapper width="6rem" height="1.6rem" border="0.04rem" color="#d3d4d8" background="#ffffff" radius="0.2rem">
                <Div>
                    <Text line="1.08rem" level={3} color="#232735">
                        {props.word}
                    </Text>
                    <Icondown style={{width: "0.6rem", height: "0.4rem", margin: "0 0 0 0.2rem"}} fill="#232735"></Icondown>
                </Div>
                </Wrapper>
            )}
            {props.type==="bigon" && ( 
                <Wrapper width="fit-content" height="1.6rem" border="0.08rem" color="#c8acee" background="#ffffff" radius="0.2rem">
                <Div>
                    <Text line="1.08rem" level={3} color="#232735">
                        {props.word}
                    </Text>
                    <Iconup style={{width: "0.6rem", height: "0.4rem", margin: "0 0 0 0.2rem"}} fill="#232735"></Iconup>
                </Div>
                </Wrapper>
            )}
            {props.type==="smalloff" && ( 
                <Wrapper width="fit-content" height="1.6rem" border="0.04rem" color="#d3d4d8" background="#ffffff" radius="0.2rem">
                <Div>
                    <Text line="1.08rem" level={3} color="#232735">
                        {props.word}
                    </Text>
                    <Icondownline style={{width: "0.6rem", height: "0.3rem", margin: "0 0 0 0.2rem"}} fill="#8b90a0"></Icondownline>
                </Div>
                </Wrapper>
            )}
            {props.type==="smallon" && ( 
                <Wrapper width="fit-content" height="1.6rem" border="0.04rem" color="#d3d4d8" background="#f0f1f3" radius="0.2rem">
                <Div>
                    <Text line="1.08rem" level={3} color="#232735">
                        {props.word}
                    </Text>
                    <Iconupline style={{width: "0.6rem", height: "0.3rem", margin: "0 0 0 0.2rem"}} fill="#8b90a0"></Iconupline>
                </Div>
                </Wrapper>
            )}
        </Row>
    );
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

