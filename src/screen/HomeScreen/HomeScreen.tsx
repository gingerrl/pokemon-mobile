import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/PokemonCard';
import { useState, useEffect } from 'react';
import { pokemonInit } from '../../middleware/Api';
import { PokemonDetail } from '../../interface/interfacePokemon';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const [pokemonsList, setPokemonsList] = useState<PokemonDetail[]>([])

  useEffect(() => {
    async function getPokemon() {
      const listPokemon = await pokemonInit()
      setPokemonsList(listPokemon)
    }
    getPokemon()
  }, [])


  return (
    <>
      <View
        style={{ alignItems: 'center' }}
      >


        <FlatList
          data={pokemonsList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={(
            <Text style={{

              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
            }}>Pokemon</Text>


          )}

          renderItem={({ item }) => (<PokemonCard pokemon={item} />

          )}
          //infinite scroll
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator
              style={{ height: 100 }}
              size={20}
              color="grey"
            />
          )}
        />

      </View>

    </>
  )
}