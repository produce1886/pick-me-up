import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter";

export default function FilterSearch(props) {
  return (
    <Wrapper>
      <FilterWrapper>
        <Filter title="카테고리"></Filter>
        <Filter title="구인분야"></Filter>
        {props.type === "project" && (
          <>
            <Filter title="지역"></Filter>
            <Filter title="프로젝트 종류"></Filter>
          </>
        )}
      </FilterWrapper>
      <Search></Search>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  flex-direction: row;
`;

const FilterWrapper = styled.div`
  width: 23rem;
  height: 1.6rem;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 15rem 0 0rem;
`;
