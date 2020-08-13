import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 100%;
		height: ${props.height};
		background-color: #ffffff;
		box-sizing: border-box;
		border-bottom: 0.07rem solid #d3d4d8;
		align-items: center;
		justify-content: flex-end;
		position: relative;
		flex-direction: row;
		padding: 1rem 1.5rem 1rem 1.5rem;
		margin: 1rem 0rem 0 0rem;
	`}
`;
