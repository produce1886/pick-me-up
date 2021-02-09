import React from "react";
import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filters, { FilterGroupProps } from "../molecules/Filter/FilterGroup";

function FilterSearch(
  props: FilterGroupProps & {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  }
) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Filters
          height="1.6rem"
          width="fit-content"
          line="1.08rem"
          level={3}
          page={props.page}
          setCategory={props.setCategory}
          setRecruitmentField={props.setRecruitmentField}
          setRegion={props.setRegion}
          setProjectSection={props.setProjectSection}
        ></Filters>
        <Search setQuery={props.setQuery}></Search>
      </InnerWrapper>
    </Wrapper>
  );
}

export default React.memo(FilterSearch);

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 92%;
  width: 48rem;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  font-family: inherit;
  border: none;
  border-radius: 0.2rem;
  margin: 0 0.8rem 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
