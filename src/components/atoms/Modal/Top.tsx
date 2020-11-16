import styled from "styled-components";
import Colors from "@colors";

export default styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${Colors.WHITE};
  box-sizing: border-box;
  border-bottom: 0.07rem solid ${Colors.GREY};
  align-items: center;
  position: relative;
  padding: 1rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
