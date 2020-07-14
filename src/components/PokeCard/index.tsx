import React, { FC, Fragment } from 'react'
import api from '../../Services/api'

interface Props {
    name: string
    id: string | number
}

const PokeCard: FC<Props> = ({ name, id }) => {
    return (
        <Fragment>
            <img src={api.getImages(id)} alt={name} />
                <div>
                    {name}
                </div>
                <div>
                    {id}
                </div>
        </Fragment>
    )
}

export default PokeCard
