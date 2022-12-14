import styled from "styled-components";

export const FormContainer = styled.form`
	padding: 4rem 2rem;

	width: 100%;
	max-width: 37rem;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	border-radius: var(--radius-1);
	background-color: var(--gray-100);

	h2 {
		margin-bottom: 1rem;
		text-align: center;
		font-weight: 600;
		font-size: var(--title);
	}

	h4 {
		margin-top: 1.5rem;
		margin-bottom: 0.7rem;
		text-align: center;
		font-size: var(--headline);
		color: var(--gray-20);
	}

	input {
		margin-bottom: 1rem;
	}

	a {
		padding: 1.5rem 0;
		text-align: center;
		font-size: var(--headline);
		color: var(--color-text);
		border-radius: var(--radius-1);
		background-color: var(--gray-20);
		transition: all 0.3s ease;
	}

	a:hover {
		background-color: var(--gray-50);
	}

	button {
		margin-top: 1rem;
	}
`;
