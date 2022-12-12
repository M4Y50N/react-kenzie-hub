import styled from "styled-components";

export const StyledModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 95%;
	max-width: 290px;

	form {
		height: max-content;
		display: flex;
		flex-direction: column;
		row-gap: 1.5rem;
		border-radius: var(--radius-2);
		background-color: var(--gray-100);
	}

	form > .topHeader {
		padding: 1rem 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: var(--radius-2) var(--radius-2) 0 0;
		background-color: var(--gray-50);

		& > button {
			padding: 0.5rem 0.7rem;
		}
	}

	form > .body {
		padding: 0.7rem 1.5rem;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	form > .footer {
		padding: 0rem 1.5rem 2rem;
		display: flex;
		justify-content: space-between;
		column-gap: 0.7rem;

		& > button {
			padding: 1.5rem 2.5rem;
		}
	}
`;
