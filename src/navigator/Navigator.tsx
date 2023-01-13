import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Nav1 } from './Navigator1';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Nav2Screen } from './Navigator2';

const Tab = createBottomTabNavigator();



export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856D6',
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                }

            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Nav1}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="list-outline"
                        />
                    )
                }}

            />
            <Tab.Screen
                name="SearchScreen"
                component={Nav2Screen}
                options={{
                    tabBarLabel: 'Busqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="search-outline"
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}