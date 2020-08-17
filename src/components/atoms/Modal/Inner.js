import styled, { css } from "styled-components";

export default styled.div`
  ${(props) => css`
		width: 40rem;
		height: ${props.height};
		background-color: #ffffff;
        box-sizing: border-box;
        box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.5);
        border-radius: 0.8rem
		align-items: center;
		position: relative;
		top: 50%;
        margin: 0 auto;
		transform: translateY(-50%);
	`}
`;
