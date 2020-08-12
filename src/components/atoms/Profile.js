import styled, {css} from "styled-components";


export default styled.div`
${(props)=> css`
  width: fit-content;
  align-items: center;
  display: flex;
  flex-direction: ${props.direction}
  `}
`;