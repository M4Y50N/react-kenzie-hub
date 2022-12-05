import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-background: #121214;
       
        --gray-150: #121214;
        --gray-100: #212529;
        --gray-50: #343B41;
        --gray-20: #868E96;
        --gray-0: #F8F9FA;

        --color-information: #155BCB;
        --color-success: #168821;
        --toastify-color-success: #27AE60; 
        --color-warning: #FFCD07;
        --toastify-color-warning: #FFCD07;
        --color-error: #E60000;  
        --toastify-color-error: #EB5757;

        --font-family: Inter, sans-serif;
       
        --color-text: #F8F9FA;
        --color-text-in-primary: #F8F9FA;
        /* --color-text-complement: #A3A3A2;
        --color-text-light: #C9C9C9; */

        --title: 1.6rem;

        --headline: 1.2rem;
        --headlinebold: 1.2rem;
        --headlineitalic: 1.2rem;

        --radius-1: 0.3rem;
        --radius-2: 0.5rem;

        font-size: 62.5%;
    }
    
    #root{
        height: 100%;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--gray-0);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--color-primary-focus);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
    }
`;
