import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonDetails } from '../../components/PokemonDetail';
import { RootStackParams } from '../../navigator/Navigator1';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'> { };


export const PokemonScreen = ({ navigation, route }: Props) => {

  const { simplePokemon, color } = route.params
  const { top } = useSafeAreaInsets()
  return (

    <View style={{ flex: 1 }}>
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>

        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 5
          }}
        >
          <Icon
            name="arrow-back-outline"
            color="white"
            size={35}
          />
        </TouchableOpacity>


          <Image
             source={{ uri: simplePokemon.img }}
             style={styles.pokemonImage}          
          />
      </View>
      <PokemonDetails pokemon={simplePokemon} />

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 270,
    zIndex: 999,
    alignItems: "center",
    borderBottomRightRadius: 900,
    borderBottomLeftRadius: 800
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15
  },
});