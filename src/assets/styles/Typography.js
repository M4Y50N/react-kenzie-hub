import styled, { css } from "styled-components";
import { appearAnimation } from "./Animation";

export const Title = styled.h1`
	font-weight: 600;
	font-size: var(--title);

	${({ Color }) => {
		return css`
			color: var(${Color});
		`;
	}}

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

export const P = styled.p`
	margin: 0.3rem 0;
	text-align: center;
	font-size: var(--headline);
	color: var(--gray-20);

	animation: ${appearAnimation} 0.3s ease;
`;
