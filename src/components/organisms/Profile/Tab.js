import React from "react";
import styled from "styled-components";
import TabButton from "../../molecules/Button/Tab";

function Tab(props) {
  return (
    <Wrapper>
      <TabButton
        isSelected={props.selected === 0}
        onClick={() => props.setSelected(0)}
        text="정보"
      ></TabButton>
      <TabButton
        isSelected={props.selected === 1}
        onClick={() => props.setSelected(1)}
        text="프로젝트"
      ></TabButton>
      <TabButton
        isSelected={props.selected === 2}
        onClick={() => props.setSelected(2)}
        text="포트폴리오"
      ></TabButton>
    </Wrapper>
  );
}

export default React.memo(Tab);

const Wrapper = styled.div`
  width: 100%;
  height: 2rem;
  align-items: center;
  border-bottom: 1px solid ${Colors.LIGHT_GREY};
  display: flex;
  justify-content: center;
`;
