import styled from "styled-components";
import Text from "../atoms/Text";
import Row from "../atoms/Row";

export default function Filterinfo(props){
    return(
        <Wrapper>
            <FirstDiv>
                 <Text level={0} width="1.8" color="#8b90a0" line={0.72} name="카테고리">
                  카테고리
                 </Text> 
            </FirstDiv>
            <Div>
                <Text level={0} width="1.8" color="#8b90a0" line={0.72} name="구인분야">
                  구인분야
               </Text>
            </Div>
            <Div>
                <Text level={0} width="0.92" color="#8b90a0" line={0.72} name="지역">
                  지역
               </Text>
            </Div>
            <LastDiv>
                <Text level={0} width="2.76" color="#8b90a0" line={0.72} name="프로젝트 종류">
                  프로젝트 종류 
               </Text>
            </LastDiv>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 12.16rem;
    height: 0.72rem;
    display:flex;
    align-items: center;
    box-sizing: boreder-box;

`;

const Div = styled.div`
    width: 100%
    height: 0.72rem;
    border-right: 0.07rem solid #8b90a0;
    padding: 0rem 0.4rem 0rem 0.4rem 
`;
const FirstDiv = styled.div`
    width: 100%
    height: 0.72rem;
    border-right: 0.07rem solid #8b90a0;
    padding: 0rem 0.4rem 0rem 0rem 
`;
const LastDiv = styled.div`
    width: 100%
    height: 0.72rem;
    padding: 0rem 0rem 0rem 0.4rem 
`;