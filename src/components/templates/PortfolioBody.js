import WriteButton from "../molecules/Button/Write";
import styled from "styled-components";
import Portfoliolist from "../templates/Portfoliolist"

export default function PortfolioBody(){
    return(
        <Wrapper>
            <InnerWrapper>
                <Portfoliolist></Portfoliolist>
            </InnerWrapper>
            <WriteButton></WriteButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  background-color: #f5edff;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const InnerWrapper = styled.div`
margin: 0 3rem 0 3rem;
max-width: 1200px;
width: 48rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;
