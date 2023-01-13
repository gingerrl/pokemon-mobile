import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { PokemonScreen } from '../screen/PokemonScreen/PokemonScreen';

const Stack = createStackNavigator();

export const Navigator=() =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={PokemonScreen} />
    </Stack.Navigator>
  );
}