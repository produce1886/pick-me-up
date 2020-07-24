import styled, { css } from "styled-components";

export default styled.p`
	${(props) => css`
		width: ${props.width};
		height: ${props.height};
		font-family: inherit;
		border: ${props.border} solid ${props.borderColor};
		background-color: ${props.backgroundColor};
		border-radius: 0.2rem;
		padding: 0 0.4rem 0 0.4rem;
		margin: 0 0.8rem 0 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
    align-items: center;
		position: relative;
		zindex: ${props.zIndex};
	`}
`;
