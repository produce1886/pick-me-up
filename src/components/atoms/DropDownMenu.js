import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 6.84rem;
		height: fit-content;
		border: none;
		background-color: transparent;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex: none;
		display: flex;
		position: relative;
		zindex: ${props.zIndex};
	`}
`;
