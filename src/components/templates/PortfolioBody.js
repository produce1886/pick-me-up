import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterSearch from "../organisms/FilterSearch";
import Filter from "../molecules/Filter/Filter";
import { ALIGN } from "../molecules/Filter/ItemData";
import PortfolioList from "./PortfolioList";
import WriteButton from "../molecules/Button/Write";
import ModalWrite from "../organisms/ModalWrite";

export default function PortfolioBody(props) {
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [sort, setSort] = useState("최신순");
  const [query, setQuery] = useState("");
  const [writeVisible, setWriteVisible] = useState(false);
  const isSignedIn = useSelector((state) => state.user.isSignedIn);

  return (
    <>
      <FilterSearch
        type="portfolio"
        setCategory={setCategory}
        setField={setField}
        setQuery={setQuery}
      ></FilterSearch>
      <Wrapper>
        <InnerWrapper>
          <Div>
            <Filter
              title="최신순"
              activeMenu="align"
              data={ALIGN}
              onClick={setSort}
            ></Filter>
          </Div>
          <PortfolioList
            category={category}
            field={field}
            query={query}
            sort={sort}
            reload={props.reload}
          ></PortfolioList>
        </InnerWrapper>
        {isSignedIn && !writeVisible && !props.viewVisible && (
          <WriteButton openWrite={() => setWriteVisible(true)}></WriteButton>
        )}
        {writeVisible && (
          <ModalWrite
            type="portfolio"
            visible={writeVisible}
            onClose={() => setWriteVisible(false)}
            reload={props.reload}
            setReload={props.setReload}
          ></ModalWrite>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #f5edff;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const InnerWrapper = styled.div`
  margin: 0 4rem 0 4rem;
  max-width: 1200px;
  width: 48rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.2rem 0 1.2rem 1rem;
  box-sizing: border-box;
`;
