import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../../components/pokemonCard';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()

  return (
    <>
      <View
        style={{ alignItems: 'center' }}
      >


        <FlatList
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