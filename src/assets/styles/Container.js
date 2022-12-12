import styled, { css } from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 120rem;

	${({ Align }) => {
		switch (Align) {
			case "center":
				return css`
					align-items: center;
				`;
			default:
				return css``;
		}
	}}
`;
