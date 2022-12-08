import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);   
`

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 775px;
    height: 72px;
    margin: 0 auto;

    button {
        padding: 0rem 1rem;
        height: 32px;
        border-radius: 4px;

        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
    }
    button:hover {
        background-color: var(--color-grey-0);
        color: var(--color-grey-3);
    }

    
`