import styled from "styled-components";
import Search from "../molecules/Input/Search";
import Filters from "../molecules/Filter/FilterGroup";
import Wrapper from "../atoms/FilterSearch";

export default function FilterSearch(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <Filters
          height="1.6rem"
          width="fit-content"
          line="1.08rem"
          level={3}
          type={props.type}
          setCategory={props.setCategory}
          setField={props.setField}
          setRegion={props.setRegion}
          setProjectType={props.setProjectType}
        ></Filters>
        <Search></Search>
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0 4rem 0 4rem;
  max-width: 1200px;
  width: 48rem;
`;
