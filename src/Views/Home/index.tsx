/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, Fragment } from 'react'
import { StyledDiv } from './styled'
import axios from 'axios'
import PokeIcon from '../../Components/PokeIcon'
import Pokemon from  '../Pokemon'

const Home: FC = () => {
    const offset = 20
    const limit = 100
    const lastIndex = 980
    const [pokemons, setPokemons]: any[] = useState([])
    const [maxIndex, setMaxIndex] = useState(offset)
    const [minIndex, setMinIndex] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [selectedPokemon, setSelectedPokemon]: any[] = useState(null)

    const setDatas = (counter = 0) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?offset=${counter}&limit=${limit}`)
            .then(response => {
                const data = response?.data?.results

                data?.map((d: { name: string, url: string, pokemon: {} }) => {
                    axios
                        .get(d['url'])
                        .then(r => {
                            const general = r.data
                            d.pokemon = { general }

                            axios
                                .get(`https://pokeapi.co/api/v2/pokemon-species/${general.id}`)
                                .then(r => {
                                    const specie = r.data
                                    Object.assign(d.pokemon, { specie })
                                })
                        })

                    const result = [...pokemons, ...data]

                    setPokemons(result)
                })
            })

    }

    useEffect(() => { setDatas(0) }, [])

    useEffect(() => { }, [pokemons])

    useEffect(() => {
        if (maxIndex === pokemons?.length) {
            setDatas(maxIndex)
        }
    }, [minIndex, maxIndex])

    return (
        <StyledDiv>
            <div className="home-container">
                {
                    Boolean(selectedPokemon) ? (
                        <Pokemon
                            back={() => setSelectedPokemon(null)}
                            data={selectedPokemon}
                        />
                    ) : (
                            <Fragment>
                                <div className="home-pokemon-list">
                                    {
                                        pokemons?.map((poke: {
                                            name: string,
                                            url: string,
                                            pokemon: {}
                                        }, index: number) => {
                                            if (index >= minIndex && index < maxIndex) {
                                                const pokemonName = poke['name']
                                                const pokemonId = poke['url']?.split('/')[poke['url']?.split('/')?.length - 2]

                                                return (
                                                    <div
                                                        key={`Pokemon-${index + 1}`}
                                                        onClick={() => {
                                                            setSelectedPokemon(poke.pokemon)
                                                        }}
                                                    >
                                                        <PokeIcon name={pokemonName} id={pokemonId} />
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>

                                <div className="home-navigation-container">
                                    <div
                                        className="navigation-link"
                                        onClick={() => {
                                            if(minIndex > 0) {
                                                setMaxIndex(minIndex)
                                                setMinIndex(minIndex - offset)
                                                setPageCount(pageCount - 1)
                                            }
                                        }}
                                     >
                                        {'< Back'}
                                    </div>

                                        <div className="navigation-page-count">
                                            {pageCount + 1} / {lastIndex / offset}
                                        </div>

                                    <div
                                        className="navigation-link"
                                        onClick={() => {
                                            if(maxIndex < lastIndex) {
                                                setMinIndex(maxIndex)
                                                setMaxIndex(maxIndex + offset)
                                                setPageCount(pageCount + 1)
                                            }
                                        }}
                                     >
                                        {'Next >'}
                                    </div>
                                </div>
                            </Fragment>
                        )
                }
            </div>
        </StyledDiv>
    )
}

export default Home