import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { PokemonDetail } from '../interface/interfacePokemon';


interface Props {
    pokemon: PokemonDetail
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={styles.title}>Types</Text>

                <View style={{ flexDirection: "row" }}>
                    {
                        pokemon.types.map((type, index) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={index}
                            >
                                {type}

                            </Text>
                        ))
                    }
                </View>
                {/* Peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}> {pokemon.weight} Kg </Text>
            </View>

            {/* Sprites */}

            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>

            </View>

            <View style={{ flexDirection: 'row' }}>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        pokemon.sprites.map((sprites, index) => (

                            <Image
                                source={{ uri: sprites }}
                                style={styles.basicSprite}
                                key={index}

                            />

                        ))

                    }

                </ScrollView>
            </View>



            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>

                {
                    pokemon.moves && (
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                pokemon.moves.map((move, index) => (
                                    <Text
                                        style={{
                                            ...styles.regularText,
                                            marginRight: 10,
                                            margin: 10
                                        }}
                                        key={index}
                                    >
                                        {move}

                                    </Text>
                                ))
                            }
                        </View>
                    )
                }

            </View>


        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});