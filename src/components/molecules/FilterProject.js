import styled from "styled-components";
import Filter from "../molecules/Filter"

export default function FilterProject(){
    return (
        <Wrapper>
            <Filter type="smalloff" word="카테고리"></Filter>
            <Filter type="smalloff" word="구인분야"></Filter>
            <Filter type="smalloff" word="지역"></Filter>
            <Filter type="smalloff" word="프로젝트 종류"></Filter>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 19.84rem;
    height: 1.6rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
`;