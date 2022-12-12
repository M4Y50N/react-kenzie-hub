import styled from "styled-components";

export const StyledHeader = styled.header`
	box-shadow: 0 1px 0 var(--gray-100);

	& > div {
		font-size: var(--headline);
		padding: 3rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;
