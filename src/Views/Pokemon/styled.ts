import styled from 'styled-components'

export const StyledDiv = styled.div`
    .back-button {
        cursor: pointer;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    .bold-span {
        margin-right: 5px;
        color: #353f47;
        font-weight: 600;
    }

    .text-row {
        margin-top: 10px;

        &.pokemon-type {
            display: flex;
            span:last-of-type {
                display: flex;

                div {
                    margin-right: 3px;
                }
            }
        }
    }

    .flex-body {
        display: flex;

        .image-container {
            background-color: rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(0, 0, 0, 0.25);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            padding: 10px;
            margin-right: 10px;
            position: relative;
        }
    }

    img {
        object-fit: contain;
        z-index: 1;
    }

    @media (max-width: 600px) {
        .flex-body {
            flex-direction: column;
        }
    }
`