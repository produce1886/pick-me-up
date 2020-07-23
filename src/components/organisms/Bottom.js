import TopButton from "../molecules/Button/Top";
import MoreListButton from "../molecules/Button/MoreList";
import styled, {css} from "styled-components";
import Wrapper from "../atoms/Bottom"

export default function Bottom(props){
    return(
        <Wrapper background={props.background}>
          <InnerWrapper>
        <TopButton background={props.background}></TopButton>
        <MoreListButton link="" text="더 불러오기"></MoreListButton>
        </InnerWrapper>
      </Wrapper>
    );
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 0 9rem 0 4rem;
  max-width: 1200px;
  width: 48rem;
`;



