import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemonCard';
import { useState } from 'react';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const [cash, setCash] = useState(
    [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "id": "https://pokeapi.co/api/v2/pokemon/1/",
        "img": "https://pokeapi.co/api/v2/pokemon/1/",

      },
      {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "id": "https://pokeapi.co/api/v2/pokemon/2/",
        "img": "https://pokeapi.co/api/v2/pokemon/2/",


      },
      {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/",
        "id": "https://pokeapi.co/api/v2/pokemon/3/",
        "img": "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/",
        "id": "https://pokeapi.co/api/v2/pokemon/4/",
        "img": "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/",
        "id": "https://pokeapi.co/api/v2/pokemon/5/",
        "img": "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
        ,
        "id": "https://pokeapi.co/api/v2/pokemon/6/",
        "img": "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
        ,
        "id": "https://pokeapi.co/api/v2/pokemon/7/",
        "img": "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
        ,
        "id": "https://pokeapi.co/api/v2/pokemon/8/",
        "img": "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
        ,
        "id": "https://pokeapi.co/api/v2/pokemon/9/",
        "img": "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/",
        "id": "https://pokeapi.co/api/v2/pokemon/10/",
        "img": "https://pokeapi.co/api/v2/pokemon/10/",
      },
      {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/",
        "id": "https://pokeapi.co/api/v2/pokemon/11/",
        "img": "https://pokeapi.co/api/v2/pokemon/11/",
      },
      {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/",
        "id": "https://pokeapi.co/api/v2/pokemon/12/",
        "img": "https://pokeapi.co/api/v2/pokemon/12/",
      },
      {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/",
        "id": "https://pokeapi.co/api/v2/pokemon/13/",
        "img": "https://pokeapi.co/api/v2/pokemon/13/",
      },
      {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/",
        "id": "https://pokeapi.co/api/v2/pokemon/14/",
        "img": "https://pokeapi.co/api/v2/pokemon/14/",
      },
      {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/",
        "id": "https://pokeapi.co/api/v2/pokemon/15/",
        "img": "https://pokeapi.co/api/v2/pokemon/15/",
      },
      {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/",
        "id": "https://pokeapi.co/api/v2/pokemon/16/",
        "img": "https://pokeapi.co/api/v2/pokemon/16/",
      },
      {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "id": "https://pokeapi.co/api/v2/pokemon/17/",
        "img": "https://pokeapi.co/api/v2/pokemon/17/",
      },
      {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/",
        "id": "https://pokeapi.co/api/v2/pokemon/18/",
        "img": "https://pokeapi.co/api/v2/pokemon/18/",
      },
      {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/",
        "id": "https://pokeapi.co/api/v2/pokemon/19/",
        "img": "https://pokeapi.co/api/v2/pokemon/19/",
      },
      {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
        "id": "https://pokeapi.co/api/v2/pokemon/20/",
        "img": "https://pokeapi.co/api/v2/pokemon/20/",
      },
      {
        "name": "spearow",
        "url": "https://pokeapi.co/api/v2/pokemon/21/",
        "id": "https://pokeapi.co/api/v2/pokemon/21/",
        "img": "https://pokeapi.co/api/v2/pokemon/21/",
      },
      {
        "name": "fearow",
        "url": "https://pokeapi.co/api/v2/pokemon/22/",
        "id": "https://pokeapi.co/api/v2/pokemon/22/",
        "img": "https://pokeapi.co/api/v2/pokemon/22/",
      },
      {
        "name": "ekans",
        "url": "https://pokeapi.co/api/v2/pokemon/23/",
        "id": "https://pokeapi.co/api/v2/pokemon/23/",
        "img": "https://pokeapi.co/api/v2/pokemon/23/",
      },
      {
        "name": "arbok",
        "url": "https://pokeapi.co/api/v2/pokemon/24/",
        "id": "https://pokeapi.co/api/v2/pokemon/24/",
        "img": "https://pokeapi.co/api/v2/pokemon/24/",
      },
      {
        "name": "pikachu",
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "id": "https://pokeapi.co/api/v2/pokemon/25/",
        "img": "https://pokeapi.co/api/v2/pokemon/25/",
      },
      {
        "name": "raichu",
        "url": "https://pokeapi.co/api/v2/pokemon/26/",
        "id": "https://pokeapi.co/api/v2/pokemon/26/",
        "img": "https://pokeapi.co/api/v2/pokemon/26/",
      },
      {
        "name": "sandshrew",
        "url": "https://pokeapi.co/api/v2/pokemon/27/",
        "id": "https://pokeapi.co/api/v2/pokemon/27/",
        "img": "https://pokeapi.co/api/v2/pokemon/27/",
      },
      {
        "name": "sandslash",
        "url": "https://pokeapi.co/api/v2/pokemon/28/",
        "id": "https://pokeapi.co/api/v2/pokemon/28/",
        "img": "https://pokeapi.co/api/v2/pokemon/28/",
      },
      {
        "name": "nidoran-f",
        "url": "https://pokeapi.co/api/v2/pokemon/29/",
        "id": "https://pokeapi.co/api/v2/pokemon/29/",
        "img": "https://pokeapi.co/api/v2/pokemon/29/",
      },
      {
        "name": "nidorina",
        "url": "https://pokeapi.co/api/v2/pokemon/30/",
        "id": "https://pokeapi.co/api/v2/pokemon/30/",
        "img": "https://pokeapi.co/api/v2/pokemon/30/",
      },
    ]
  )

  console.log("op", cash)
  return (
    <>
      <View
        style={{ alignItems: 'center' }}
      >


        <FlatList
          data={cash}
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