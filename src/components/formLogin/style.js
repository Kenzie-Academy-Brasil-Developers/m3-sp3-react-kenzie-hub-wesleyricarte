import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 42px 22px 42px 22px;
    gap: 22px;

    background-color: var(--color-grey-3);

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
        width: 100%;

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

    & > button {
        width: 100%;
        height: 48px;

        background-color: var(--color-primary);
        color: var(--color-grey-0);

        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        border-radius: 4px;
    }
    & > button:hover{
        background-color: var(--color-primary-focus);
    }
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        gap: 22px;
        
        button {
            width: 100%;
            height: 48px;
            
            background-color: var(--color-grey-1);
            color: var(--color-grey-0);
            
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            border-radius: 4px;
        }
        button:hover {
            background-color: var(--color-grey-2);
        }
    }
`