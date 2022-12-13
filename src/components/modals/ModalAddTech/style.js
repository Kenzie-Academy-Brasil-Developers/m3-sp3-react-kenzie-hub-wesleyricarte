import styled from 'styled-components';

export const StyledModal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: rgba(0,0,0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        background-color: var(--color-grey-3);
        border-radius: 4px;

        width: 370px;
    }
`

export const StyledHeaderModal = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-grey-2);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    width: 100%;
    height: 50px;
    padding: 0 20px;

    h3 {
        font-size: 14px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    button {
        height: 24px;
        color: var(--color-grey-1);
    }
`

export const StyledFormAddTech = styled.form`
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 20px;
    padding: 32px 20px;

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--color-grey-0);
    }

    h5 {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--color-grey-1);
    }

    label {
        font-weight: 400;
        font-size: 12px;
        line-height: 0px;
        color: var(--color-grey-0);
    }

    p {
        font-weight: 400;
        font-size: 10px;
        line-height: 0px;
        color: var(--color-primary);

        margin-bottom: 10px;
    }

    section {
        display: flex;
        flex-direction: column;

        gap: 18px;
    }

    input {
        display: flex;
        align-items: center;
        
        width: 100%;
        height: 48px;
        padding: 0rem 1rem;

        background-color: var(--color-grey-2);
        color: var(--color-grey-1);
        border: 1.3px solid var(--color-grey-2);
        border-radius: 4px;
        flex-grow: none;

        font-size: 16px;
        font-weight: 400;        
    }
    input:focus {
        border: 1.3px solid var(--color-grey-0);
        color: var(--color-grey-0);
    }

    select, option {
        display: flex;
        align-items: center;
        
        width: 100%;
        height: 48px;
        padding: 0rem 1rem;

        background-color: var(--color-grey-2);
        color: var(--color-grey-1);
        border: 1.3px solid var(--color-grey-2);
        border-radius: 4px;
        flex-grow: none;
        
        &:focus {
            border: 1.3px solid var(--color-grey-0);
        }
    }

    button {
        width: 100%;
        height: 48px;

        background-color: var(--color-primary);
        color: var(--color-grey-0);
        border-radius: 4px;

        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
    }
    button:hover{
        background-color: var(--color-primary-focus);
    }

`