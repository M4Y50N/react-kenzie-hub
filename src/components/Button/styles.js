import styled from "styled-components";

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
`;
