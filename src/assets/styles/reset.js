import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
     * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html{
        width: 100vw;
        height: 100vh;
    }

    body {
        font-family: var(--font-family);
        background: var(--color-background);
        color: var(--color-text);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    
    }

    /* body, input, button, textarea {
        font-family: var(--font-family);
        font-size: 1.6rem;
    } */
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }
`;
