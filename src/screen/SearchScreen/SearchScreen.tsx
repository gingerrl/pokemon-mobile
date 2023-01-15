import React, {useState } from 'react'
import { View, Text } from 'react-native';
import { PokemonDetail } from '../../interface/interfacePokemon';
import { SearchPokemon } from '../../components/SearchPokemon';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonCard } from '../../components/PokemonCard';


export const SearchScreen = () => {
  const [search, setSearch] = useState<PokemonDetail[]>([])


  return (
    <View>
      <SearchPokemon
        onDebounce={setSearch}

      />

      <FlatList
        data={search}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        //Header
        ListHeaderComponent={(
          <Text style={{
            paddingBottom: 10,
          }}></Text>


        )}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />
        )}
      />
    </View>
  );
}