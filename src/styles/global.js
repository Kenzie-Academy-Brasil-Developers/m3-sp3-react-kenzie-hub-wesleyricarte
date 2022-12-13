import { createGlobalStyle } from 'styled-components'
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Inter", sans-serif;
    }
    *::-webkit-scrollbar {
        display: none;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
        transition: 0.1s;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        --color-success: #3FE864;
        --color-negative: #E83F5B;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: var(--color-grey-4);
        margin-bottom: 2rem;
    }
`