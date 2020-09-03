import TopButton from "../molecules/Button/Top";
import MoreListButton from "../molecules/Button/MoreList";
import styled, { css } from "styled-components";
import Wrapper from "../atoms/BottomButtons";

export default function Bottom(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TopButton></TopButton>
        {props.loadMoreVisible && (
          <MoreListButton
            text="더 불러오기"
            onClick={props.onClick}
          ></MoreListButton>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  max-width: 1200px;
  width: 48rem;
  position: relative;
  align-items: center;
`;
