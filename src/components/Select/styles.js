import styled, { css, keyframes } from "styled-components";

import downarrow from "../../assets/img/down-arrow-svgrepo-com.svg";

const appearAnimation = keyframes`
    from{
        transform: translateY(-10px);
    }
    to{
        transform: translateY(0px);
    }
`;

const disappearAnimation = keyframes`
    from{
        transform: translateY(0px);
        opacity: 1;
    }to{
        transform: translateY(-10px);
        opacity: 0;
    }
`;

export const StyledSelect = styled.div`
	position: relative;

	.selectContainer {
		cursor: pointer;
		width: 100%;
		font-size: 1.2rem;
		outline: none;
		color: var(--color-text);
		background-color: var(--gray-50);
		border: 1px solid transparent;
		border-radius: var(--radius-1);

		position: relative;

		transition: all 0.3s ease;

		&:focus {
			border: 1px solid var(--gray-0);
		}

		input {
			pointer-events: none;
			margin-bottom: 0;
			display: block;
			padding: 1.5rem;
			width: 100%;
			height: 100%;
			border: 1px solid transparent;
			border-radius: var(--radius-1);
			color: var(--gray-0);
			background-color: transparent;
		}

		input:focus {
			outline: none;
			border: 1px solid var(--gray-0);
		}

		ul {
			${({ ToggleList }) => {
				return ToggleList
					? css`
							display: flex;
							animation: ${appearAnimation} 0.3s ease;
					  `
					: css`
							display: none;
							animation: ${disappearAnimation} 0.3s ease;
					  `;
			}}
			flex-direction: column;

			width: 100%;
			height: 177px;
			overflow-y: auto;
			position: absolute;
			${({ BottomPos }) => {
				return BottomPos >= 200
					? css`
							top: 50px;
					  `
					: css`
							top: -183px;
					  `;
			}}
			left: 0;
			background-color: var(--gray-50);

			li {
				text-align: center;
				padding: 1.4rem 0;
				width: 100%;
				border-bottom: 1px solid var(--gray-20);

				transition: all 0.3s ease;
			}

			li:hover {
				cursor: pointer;
				background-color: var(--gray-20);
			}
		}
	}

	span {
		display: block;
		position: absolute;
		top: 17px;
		right: 17px;
		height: 100%;
		width: 1.4rem;
		pointer-events: none;
		background: url(${downarrow}) no-repeat;
		filter: invert(57%) sepia(9%) saturate(332%) hue-rotate(169deg)
			brightness(96%) contrast(91%);

		transition: all 0.3s ease;

		/* transform logic */
		${({ Transform }) => {
			return Transform
				? css`
						transform: rotateX(-180deg) rotateY(180deg) rotateY(180deg)
							translateY(34px);
				  `
				: css`
						transform: rotateX(0);
				  `;
		}}
	}
`;
