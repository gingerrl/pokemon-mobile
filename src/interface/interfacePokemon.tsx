
export type SimplePokemon = {
    name: string;
    url: string
}

export type PokemonDetail = {
    id: string,
    name: string,
    img: string,
    moves: any[],
    sprites: any[],
    types: any[],
    weight: number
}