import { SimplePokemon } from "../interface/interfacePokemon";
import { PokemonApi } from '../middleware/HttpService';
import { urlBase } from '../middleware/UrlBase';


export const pokemonInit = async () => {

    const { data } = await Pokemons()
    const pokemons = await data.results.reduce(async (acc: any, it: SimplePokemon) => {
        let accumulador = await acc;
        const { data: result } = await getURL(it.url);
        const body = await formatPokemon(result)
        accumulador = { ...accumulador, [it.name]: body };
        return accumulador;
    },
        {},
    )
    return pokemons ? Object.values(pokemons) : pokemons
}

export const formatPokemon = async (data: any) => {
    const { moves, sprites, weight, types, id, name } = data

    return {
        sprites: [
            sprites?.back_default,
            sprites?.back_shiny,
            sprites?.front_default,
            sprites?.front_shiny
        ],
        moves:
            moves.length > 10 &&
            moves.map((m: any) => m.move?.name).slice(0,10),
        weight,
        name,
        types: types.map((t: any) => t.type?.name),
        img: sprites.other?.home.front_default,
        id,
    }
}


export const Pokemons = async () => {
    const resp = await PokemonApi.get(`${urlBase.INITIAL_URL}pokemon`)
    return resp
}


export const Pokemon = async (id: string) => {
    const resp = await PokemonApi.get(`${urlBase.INITIAL_URL}pokemon/${id}`)
    return resp
}

export const getURL = async (url: string) => {
    const resp = await PokemonApi.get(url)
    return resp;

}