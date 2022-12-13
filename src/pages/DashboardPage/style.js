import styled from "styled-components"

export const StyledMain = styled.main`
    .divWellcome {
        width: 100%;
        margin-top: 72px;
        position: fixed;
        top: 0;
        z-index: 0;
        
        background-color : var(--color-grey-4);
        border-top: 1px solid var(--color-grey-3);  
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

    .container > section {
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

    h4 {
        font-size: 14px;
        font-weight: 700;
        color: var(--color-grey-0);
    }

    h5 {
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-1);
    }

    .divMainContent {
        width: 100%;

        .mainContainer {
            margin: 0 auto;
            width: 775px;
            margin-top: calc(72px + 72px);

            display: flex;
            flex-direction: column;

            section {
                display: flex;
                align-items: center;
                justify-content: space-between;
        
                width: 100%;
                height: 64px;
        
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    color: var(--color-grey-0);
                    background-color: var(--color-grey-3);
                    
                    width: 32px;
                    height: 32px;
                    border-radius: 4px;
                }
                button:hover{
                    background-color: var(--color-grey-2);
                }
            }

            ul {
                display: flex;
                flex-direction: column;

                width: 100%;
                padding: 22px;
                border-radius: 4px;
                gap: 1rem;

                background-color: var(--color-grey-3);

                li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    width: 100%;
                    height: 50px;
                    padding: 0 22px;
                    border-radius: 4px;

                    background-color: var(--color-grey-4);

                    div {
                        display: flex;
                        align-items: center;

                        gap: 2rem;

                        button{
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            width: 16px;
                            height: 16px;

                            color: var(--color-grey-1);
                        }
                        button:hover {
                            color: var(--color-grey-0);
                        }
                    }
                }

                li:hover {
                    background-color: var(--color-grey-2);
                    cursor: pointer;
                }
            }
        }
    }

    .divNoTechs {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 48px;
    }
`