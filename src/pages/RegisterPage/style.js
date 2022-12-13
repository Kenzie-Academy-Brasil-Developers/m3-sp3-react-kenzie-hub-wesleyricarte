import styled from "styled-components"

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 40px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 370px;
        margin-bottom: 40px;

    }

    & > div > button {
        padding: 0rem 1rem;
        height: 40px;
        border-radius: 4px;

        color: var(--color-grey-0);
        background-color: var(--color-grey-3);
    }
    & > div > button:hover {
        background-color: var(--color-grey-0);
        color: var(--color-grey-3);
    }
`

export const StyledBoxRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 370px;
    padding: 42px 22px;
    gap: 22px;

    background: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`