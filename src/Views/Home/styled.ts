import styled from 'styled-components'
import BackgroundImage from '../../assets/images/background.png'

export const StyledDiv = styled.div`
    background-image: url(${BackgroundImage});
    padding: 40px;
    display: 1;

    .home-container {
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        flex-direction: column;
        flex: 1;
        align-items: center;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

        .home-pokemon-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .home-navigation-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(0, 0, 0, 0.15);

            .navigation-link {
                cursor: pointer;
            }
        }

        .navigation-page-count {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            margin: 0 20px;
            font-family: "Dejavu Sans Condensed";
        }
    }

    @media (max-width: 600px) {
        .home-container {
            padding: 10px;
        }
    }
`