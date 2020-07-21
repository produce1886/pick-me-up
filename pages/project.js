import styled from "styled-components";
import Gnb from "../src/components/organisms/Gnb";
import Projectlist from "../src/components/templates/Projectlist"
import Filter from "../src/components/molecules/Filter"
import FilterSearch from "../src/components/organisms/FilterSearch"
import WriteIcon from "../src/components/atoms/Icon/Write"
export default function Project() {
  return (
  <>
  <Gnb></Gnb>
  <FilterWrapper>
    <FilterSearch type="project"></FilterSearch>
  </FilterWrapper>
  <Wrapper>
    <FilterListWrapper>
      <Div>
        <Filter type="bigoff" word="최신순"></Filter>
      </Div>
      <Projectlist></Projectlist>
    </FilterListWrapper>
    <IconWrapper>
      <WriteIcon style={{width: "2.4rem", height: "2.4rem"}}></WriteIcon>
    </IconWrapper>
  </Wrapper>
  </>
  
  );
}

const Wrapper = styled.div`
  background-color: #f0f8fd;
  justify-content: center;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  width: 48rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.2rem 0 1.2rem 0;
`;

const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 0.01rem solid #d3d4d8;
`;

const FilterListWrapper = styled.div`
  width: 48rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  bottom: 0;
`;

const IconWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 0 13rem 2rem;
`;