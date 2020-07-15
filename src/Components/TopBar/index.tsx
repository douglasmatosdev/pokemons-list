import React, { FC } from 'react'
import { StyledDiv } from './styled'
import PokeballIcon from '../../assets/images/icon.png'

const TopBar: FC = () => {
    return (
        <StyledDiv>
            <img src={PokeballIcon} alt="Pokeball Icon" className="topbar-pokemon-icon" />
            <h3>Pokemons list</h3>
            <a href="https://github.com/douglasmatosdev">
                <small>by Douglas Matos da Silva</small>
            </a>
        </StyledDiv>
    )
}

export default TopBar