import styled from "styled-components";
import { appearAnimation } from "./Animation";

export const Main = styled.main`
	min-height: 100%;
	padding: 3rem 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	animation: ${appearAnimation} 1s ease;
`;
