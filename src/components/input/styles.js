import styled from "styled-components";

export const StyledInput = styled.input`
	font-size: 1.2rem;
	outline: none;
	padding: 1.5rem;
	border: 1px solid transparent;
	border-radius: var(--radius-1);
	color: var(--color-text);
	background-color: var(--gray-50);
	transition: all 0.3s ease;

	&:focus {
		border: 1px solid var(--gray-0);
	}
`;
