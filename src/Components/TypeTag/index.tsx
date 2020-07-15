import React, { FC } from 'react'
import { StyledDiv } from './styled'

interface Props {
    type: string
}

const TypeTag: FC<Props> = ({ type }) => {
    return (
        <StyledDiv type={type}>
            <div className="poke-tag-rect">
                {type}
            </div>
        </StyledDiv>
    )
}

export default TypeTag