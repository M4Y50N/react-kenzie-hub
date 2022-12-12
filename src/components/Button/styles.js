import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	font-size: var(--headline);
	padding: 1.5rem 2.5rem;
	color: var(--color-text-in-primary);
	border-radius: var(--radius-1);
	background-color: var(--color-primary);
	transition: all 0.3s ease;

	&:hover {
		background-color: var(--color-primary-focus);
	}

	${({ CustomColor, CustomColorHover }) => {
		return css`
			background-color: var(${CustomColor});

			&:hover {
				background-color: var(${CustomColorHover});
			}
		`;
	}}

	${({ disable }) => {
		return disable
			? css`
					pointer-events: none;
					background-color: var(--gray-50);

					&:hover {
						background-color: var(--gray-20);
					}
			  `
			: ``;
	}}
`;
