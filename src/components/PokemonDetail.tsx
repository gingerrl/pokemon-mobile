import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Pokemons } from '../middleware/Api';
import { PokemonDetail } from '../interface/interfacePokemon';
import { useState } from 'react';
import { PokemonApi } from '../middleware/HttpService';


export const PokemonDetails = () => {
    // const [pokemon, setPokemon] = useState<PokemonDetail>()

    // const getPokemon = async () => {
    //     const resp = await PokemonApi.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon')
    //     setPokemon(resp.data)
    // }
    // useEffect(() => {
    //     getPokemon()
    // }, [])

    return (
        <View>
            <Text>Types</Text>
        </View>
    )
}