import styled, { css } from "styled-components";

export const Title = styled.h1`
	font-weight: 600;
	font-size: var(--title);
	color: var(--color-primary);

	${({ Position }) => {
		switch (Position) {
			case "center":
				return css`
					text-align: center;
				`;
			default:
				return css`
					text-align: start;
				`;
		}
	}}

	${({ Padding }) => {
		switch (Padding) {
			case "form-title":
				return css`
					padding: 3rem 0;
				`;
			default:
				return css`
					padding: 0;
				`;
		}
	}}
`;
