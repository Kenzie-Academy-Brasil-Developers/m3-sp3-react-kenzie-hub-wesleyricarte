import styled from "styled-components"

export const StyledMain = styled.main`
    & > div {
        border-bottom: 1px solid var(--color-grey-3);   
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 775px;
        height: 72px;
        margin: 0 auto;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 118px;
    }

    h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    h3 {
        font-size: 16px;
        font-weight: 400;
        color: var(--color-grey-0);
    }

    h5 {
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-1);
    }

    .div-develop{
        display: flex;
        flex-direction: column;
        gap: 22px;

        margin-top: 40px;
    }
`