import Wrapper from "../../atoms/Input/Search"
import Text from "../../atoms/Text"
import Icon from "../../atoms/Icon/Search"
import styled from "styled-components"

export default function Search(){
    return(
        <Wrapper>
            <Icon style={{width: "0.7rem", height: "0.7rem", margin: "0 0.52rem 0 0"}} fill="#8b90a0"></Icon>
                <Text level={2} color="#d3d4d8" line="0.9rem" width="7.4rem" align="left">
                    검색
                </Text>
        </Wrapper>
    );
}