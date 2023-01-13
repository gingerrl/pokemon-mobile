import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonScreen } from '../screen/PokemonScreen/PokemonScreen';
import { SearchScreen } from '../screen/SearchScreen/SearchScreen';
import { RootStackParams } from "./Navigator1";
import React from 'react'




const Navigator2 = createNativeStackNavigator<RootStackParams>();

export const Nav2Screen = () => {
  return (
    <Navigator2.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Navigator2.Screen name="HomeScreen" component={SearchScreen} />
      <Navigator2.Screen name="PokemonScreen" component={PokemonScreen} />

    </Navigator2.Navigator>
  );
}