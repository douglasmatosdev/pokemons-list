import React, { FC, useState, useEffect, Fragment } from 'react'
import api from '../../Services/api'
import PokeCard from '../PokeCard'
import { PokedexBox, Navigation } from './styled'

import axios from 'axios'
import { off } from 'process'

interface Selected {
    name: string
    url: string
    pokemon: {}
}

const Pokedex: FC = () => {
    const offset = 20
    const limit = 100
    const lastIndex = 980
    const [pokemons, setPokemons]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(offset)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [selected, setSelected] = useState<Selected[] | null>(null)

    const setResponse = (counter = 0) => {
        api.getPokemons(counter, limit)
            .then(response => {
                const data = response?.data?.results

                data?.map((d: Selected) => {
                    axios.get(d['url'])
                        .then(r => {
                            const general = r.data
                            d.pokemon = { general }

                            api.getSpecies(general.id)
                                .then(r => {
                                    const specie = r.data
                                    Object.assign(d.pokemon, { specie })
                                })
                        })
                })

                const result = [...pokemons, ...data]

                setPokemons(result)
            }

            )
    }

    useEffect(() => {
        setResponse(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (maxIndex === pokemons.length) {
            setResponse(maxIndex)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minIndex, maxIndex])
    return (
        <Fragment>
            <PokedexBox>
                {
                    pokemons?.map((poke: Selected, index: number): JSX.Element | void => {
                        if (index >= minIndex && index < maxIndex) {
                            const pokeName = poke['name']
                            const pokeId = poke['url'].split('/')[poke['url'].split('/').length - 2]
                            return (
                                <div
                                    key={`Pokemon-${index + 1}`}
                                // onClick={() => {
                                //     setSelected(poke.pokemon)
                                // }}
                                >
                                    <PokeCard name={pokeName} id={pokeId} />
                                </div>
                            )
                        }

                    })
                }
            </PokedexBox>
            <Navigation>
                <div
                    className="navigation-link left"
                    onClick={() => {
                        if (minIndex > 0) {
                            setMaxIndex(minIndex)
                            setMinIndex(minIndex - offset)
                            setPageCount(pageCount - 1)
                        }
                    }}
                >
                    {'<'}
                </div>
                <div className="current-page">
                    {pageCount + 1} / {lastIndex / offset}
                </div>
                <div
                    className="navigation-link right"
                    onClick={() => {
                        if (maxIndex < lastIndex) {
                            setMinIndex(maxIndex)
                            setMaxIndex(maxIndex + offset)
                            setPageCount(pageCount + 1)
                        }
                    }}
                >
                    {'>'}
                </div>
            </Navigation>
        </Fragment>
    )
}

export default Pokedex