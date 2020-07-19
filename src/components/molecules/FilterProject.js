import styled from "styled-components";
import Filter from "../molecules/Filter/Off"

export default function FilterProject(){
    return (
        <Wrapper>
            <Filter word="카테고리"></Filter>
            <Filter word="구인분야"></Filter>
            <Filter word="지역"></Filter>
            <Filter word="프로젝트 종류"></Filter>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 19.84rem;
    height: 1.6rem;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    flex-direction: row;
`;