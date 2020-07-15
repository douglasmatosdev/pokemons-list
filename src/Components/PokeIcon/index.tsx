import React, { FC } from 'react'
import { StyledDiv } from './styles'
import { getPokemonImage } from '../../Utils/utils'

interface Props {
    name: string
    id: string | number
}

const PokeIcon: FC<Props> = ({ name, id }): JSX.Element => {
    return (
        <StyledDiv>
            <img src={getPokemonImage(id)} alt={name} />
            <div className="poke-icon-name">
                 {name}
            </div>
            <div className="poke-icon-id">
                #{id}
            </div>
        </StyledDiv>
    )
}

export default PokeIcon