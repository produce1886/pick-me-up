import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		box-sizing: border-box;
		display: ${(props) => (props.visible ? 'block' : 'none')};
		position: absolute;
		height: 60rem;
		top: 3.5rem;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1000;
		overflow: auto;
		outline: 0;
	`}
`;
