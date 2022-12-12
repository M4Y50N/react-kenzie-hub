import styled from "styled-components";

export const StyledUserInfo = styled.div`
	padding: 3rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 1rem;

	& > p {
		font-size: var(--headline);
		color: var(--gray-20);
	}
`;
