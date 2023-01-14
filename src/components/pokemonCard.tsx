import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SimplePokemon } from '../interface/interfacePokemon';
import { useNavigation } from '@react-navigation/native';
import * as helperGlobal from '../helper/global'
const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
    const navigation = useNavigation()
    return (

        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen',
                {
                    simplePokemon: pokemon,
                    color: helperGlobal.colorStatus()

                })

            }
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: helperGlobal.colorStatus()
            }}>

                <View>
                    <Text style={styles.name}>
                        {pokemon.name}

                        {/* {'\n#' + helperGlobal.getUrl(pokemon.id)} */}

                    </Text>


                </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        overflow: 'hidden'
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },


})