import styled from "styled-components";

export const StyledUserInfo = styled.div`
	box-shadow: 0 1px 0 var(--gray-100);

	& > div {
		padding: 4rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 1rem;

		& > p {
			font-size: var(--headline);
			color: var(--gray-20);
		}
	}
`;
