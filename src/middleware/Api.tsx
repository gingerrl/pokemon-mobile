import { SimplePokemon } from "../interface/interfacePokemon";
import { PokemonApi } from '../middleware/HttpService';
import { urlBase } from '../middleware/UrlBase';


export const pokemonInit = async () => {

    try {
        const data = await Pokemons()
        const pokemons = await data.results.reduce(async (acc: any, it: SimplePokemon) => {
            let accumulador = await acc;
            const result = await getURL(it.url);
            const body = await formatPokemon(result)
            accumulador = { ...accumulador, [it.name]: body };
            return accumulador;
        },
            {},
        )
        return pokemons ? Object.values(pokemons) : pokemons

    } catch (error) {
        return undefined
    }

}


export const formatPokemon = async (data: any) => {
    if (!data?.id) {
        return data
    }
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
            moves.map((m: any) => m.move?.name).slice(0, 10),
        weight,
        name,
        types: types.map((t: any) => t.type?.name),
        img: sprites.other?.home.front_default,
        id,
    }
}

export const pokemonSearch = async (search: string) => {
    const data = await getSearch(search)
    const body = await formatPokemon(data)
    return body?.id ? [body] : []
}


export const Pokemons = async () => {
    try {
        const resp = await PokemonApi.get(`${urlBase.INITIAL_URL}pokemon`)
        return resp.data
    } catch (error) {
        return undefined
    }

}

export const getSearch = async (search: string) => {
    try {
        const resp = await PokemonApi.get(`${urlBase.INITIAL_URL}pokemon/${search}`)
        return resp.data
    } catch (error) {
        return undefined
    }


}

export const getURL = async (url: string) => {
    try {
        const resp = await PokemonApi.get(url)
        return resp.data;
    } catch (error) {
        return undefined
    }


}