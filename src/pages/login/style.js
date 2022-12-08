import styled from "styled-components"

export const StyledMain = styled.main`
    display: flex;

    & > div {
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;

        width: 370px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`