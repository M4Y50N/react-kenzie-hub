import { keyframes } from "styled-components";

export const appearAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const disappearAnimation = keyframes`
    from{
        opacity: 1;
        transform: translateY(0px);
    }to{
        opacity: 0;
        transform: translateY(-10px);
    }
`;
