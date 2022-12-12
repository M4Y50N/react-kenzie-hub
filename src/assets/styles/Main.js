import styled, { css } from "styled-components";

export const Main = styled.main`
	min-height: 100%;
	padding: 3rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${({ animation }) => {
		return css`
			animation: ${animation} 1s ease;
		`;
	}}
`;
