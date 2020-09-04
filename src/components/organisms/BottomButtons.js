import TopButton from "../molecules/Button/Top";
import MoreListButton from "../molecules/Button/MoreList";
import styled, { css } from "styled-components";

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
const Wrapper = styled.div`
  background-color: transparent;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 0 2rem 0;
`;
