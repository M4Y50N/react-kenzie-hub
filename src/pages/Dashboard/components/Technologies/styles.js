import styled from "styled-components";

export const StyledTechnologies = styled.div`
	padding: 3rem 1rem;
`;

export const StyledUl = styled.ul`
	padding: 1.7rem 0.7rem;
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	border-radius: var(--radius-2);
	background-color: var(--gray-100);

	& > li {
		padding: 1.7rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: var(--radius-2);
		background-color: var(--gray-150);

		& > div {
			display: flex;
			align-items: center;
			column-gap: 0.7rem;
		}
	}

	& > li:hover {
		background-color: var(--gray-20);
	}

	@media (min-width: 500px) {
		padding: 2rem 1.5rem;

		& > li {
			padding: 1.7rem 2rem;
		}
	}
`;
