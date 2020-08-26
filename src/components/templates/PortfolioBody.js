import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FilterSearch from "../organisms/FilterSearch";
import PortfolioList from "./PortfolioList";
import WriteButton from "../molecules/Button/Write";
import ModalWrite from "../organisms/ModalWrite";

export default function PortfolioBody() {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const [writeVisible, setWriteVisible] = useState(false);

  const openWrite = () => {
    setWriteVisible(true);
  };
  const closeWrite = () => {
    setWriteVisible(false);
  };

  return (
    <>
      <FilterSearch type="portfolio"></FilterSearch>
      <Wrapper>
        <InnerWrapper>
          <PortfolioList></PortfolioList>
        </InnerWrapper>
        {isSignedIn && !writeVisible && (
          <WriteButton openWrite={openWrite}></WriteButton>
        )}
        {writeVisible && (
          <ModalWrite
            type="portfolio"
            visible={writeVisible}
            onClose={closeWrite}
            ismodal="modal"
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
