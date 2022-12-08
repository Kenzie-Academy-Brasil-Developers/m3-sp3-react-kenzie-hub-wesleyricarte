import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    gap: 20px;

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
        color: var(--color-grey-1);

        margin-bottom: 10px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        gap: 22px;
        padding-bottom: 16px;
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

        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
    }
    button:hover{
        background-color: var(--color-primary-focus);
    }
`