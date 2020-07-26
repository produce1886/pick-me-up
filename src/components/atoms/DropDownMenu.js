import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 6.84rem;
		height: fit-content;
		border: none;
		background-color: #ffffff;
		flex-direction: column;
		justify-content: left;
		display: flex;
		align-items: left;
		flex: none;
		position: absolute;
		top: 1.7rem;
		left:-0.2rem;
		box-shadow: 0.1rem 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);
		z-index: ${props.zIndex};
	`}
`;
