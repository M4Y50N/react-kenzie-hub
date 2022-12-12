import styled, { css } from "styled-components";

export const StyledHead = styled.div`
	width: 100%;

	${({ MaxWidth }) => {
		return css`
			max-width: ${MaxWidth};
		`;
	}}

	margin: 0 auto 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;
