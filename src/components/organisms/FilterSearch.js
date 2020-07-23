import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filter from "../molecules/Filter";

export default function FilterSearch(props) {
  return (
    <Wrapper>
      <InnerWrapper>
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
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  flex-direction: row;
  border-bottom: 0.01rem solid #d3d4d8;
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
const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
margin: 0 4rem 0 4rem;
max-width: 1200px;
width: 48rem;
`;