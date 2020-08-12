import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 5.4rem;
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
		left: -0.1rem;
		box-shadow: 0rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), 
		0.7rem 0 0.5rem rgba(0, 0, 0, 0.1);
		z-index: ${props.zIndex};
	`}
`;
