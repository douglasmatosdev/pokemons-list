import React, { FC, useEffect } from 'react'
import { StyledDiv } from './styled'
import { getPokemonImage } from '../../Utils/utils'
import TypeTag from '../../Components/TypeTag'

interface Props {
    back: any
    data?: any
}

const Pokemon: FC<Props> = ({ back, data }) => {

    useEffect(() => {
        console.log(data?.specie)
    }, [])

    return (
        <StyledDiv>
            <div className="back-button" onClick={() => back()}>
                {'< Back'}
            </div>
            {
                data?.general && data?.specie ? (
                    <div className="flex-body">
                        <div className="image-container">
                            <img
                                src={getPokemonImage(data.general.id)}
                                alt={data?.specie?.names[2]?.name}
                            />
                            <div className="image-container-background" />
                        </div>

                        <div className="pokemons-informations">
                            <div className="text-row pokemon-name">
                                <span className="bold-span">Name:</span>
                                {data?.specie?.names[2]?.name}
                            </div>
                            <div className="text-row pokemon-genre">
                                <span className="bold-span">Genre:</span>
                                {data?.specie?.genera[2]?.genus}
                            </div>
                            <div className="text-row pokemon-description">
                                <span className="bold-span">Description:</span>
                                {data?.specie?.flavor_text_entries[1]?.flavor_text}
                            </div>
                            <div className="text-row pokemon-habitat">
                                <span className="bold-span">Habitat:</span>
                                <span>
                                    {data?.specie?.habitat?.name?.replace(/\b(\w)/g, (x: string) =>
                                        x.toLowerCase()
                                    )}
                                </span>
                            </div>
                            <div className="text-row pokemon-type">
                                <span className="bold-span">Type:</span>
                                <span>
                                    {
                                        data?.general?.types?.map((d: { type: { name: string } }, i: number) => (
                                            <TypeTag key={`Tag-${d?.type?.name}-${i + 1}`} type={d?.type?.name} />
                                        ))
                                    }
                                </span>
                            </div>
                            <div className="text-row pokemon-stats">
                                <span className="bold-span">Stats:</span>
                                <span>
                                    {data?.general?.stats?.map(
                                        (
                                            d: { base_stat: number, stat: { name: string } },
                                            i: number
                                        ) => `${d?.stat?.name?.replace(/\b(\w)/g, (x: string) => 
                                            x.toLowerCase()
                                        )} : ${d?.base_stat} ${
                                            i !== data?.general?.stats?.length - 1 ? '| ' : ''
                                        }`
                                    )}
                                </span>
                            </div>
                        </div>

                    </div>
                ) : (
                        <div />
                    )
            }
        </StyledDiv>
    )
}

export default Pokemon