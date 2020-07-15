import styled from 'styled-components'

export const StyledDiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;

    img {
        min-width: 96px;
        min-height: 96px;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: rgba(0, 0, 0, 0.15);
        .poke-icon-id {
            color: #353f47;
        }
    }

    .poke-icon-name {
        text-transform: capitalize;
        font-weight: 500;
        color: #353f47;
    }

    .poke-icon-id {
        color: #aaa;
        font-size: 12px;
    }
`