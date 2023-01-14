import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { PokemonScreen } from '../screen/PokemonScreen/PokemonScreen';
import { PokemonDetail, SimplePokemon } from '../interface/interfacePokemon';

export type RootStackParams= {
    HomeScreen: undefined,
    PokemonScreen: {simplePokemon: PokemonDetail, color: string}
  }
const Stack = createStackNavigator<RootStackParams>();

export const Nav1 = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}