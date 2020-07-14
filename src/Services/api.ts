import axios from 'axios'

const imgUrl ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const pokemonUrl = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=' })
const speciesUrl = axios.create({baseURL: 'https://pokeapi.co/api/v2/pokemon-species/'})

const api = {
    getImages: (id: string | number) => `${imgUrl}${id}.png`,
    getPokemons: (counter: number, limit: number) => pokemonUrl.get(`${counter}&limit=${limit}`),
    getSpecies: (id: number) => speciesUrl.get(`${id}`)
}

export default api