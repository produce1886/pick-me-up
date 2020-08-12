import styled, { css } from "styled-components";

export default styled.div`
	${(props) => css`
		width: 100%;
		height: 6rem;
		background-color: #ffffff;
        box-sizing: border-box;
        border-bottom: 0.07rem solid #d3d4d8;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        flex-direction: row;
        padding: 1rem;
        margin: 1rem 0rem 0 0rem;
	`}
`;
