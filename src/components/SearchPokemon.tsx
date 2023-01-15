import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { pokemonSearch } from '../middleware/Api';

interface Props {
    onDebounce: Function;
}

export const SearchPokemon = ({ onDebounce }: Props) => {
    const [term, setTerm] = useState('')

    const getPokemonSearch = async () => {
        if (term.length === 0) {
            return null;
        }
        const listPokemon = await pokemonSearch(term);
        if (listPokemon && listPokemon?.length > 0) {
            onDebounce(listPokemon)

        }
    }
    return (
        <View style={{
            ...styles as any
        }}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Buscar'
                    style={{
                        ...styles.textInput
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={term}
                    onChangeText={setTerm}
                    onSubmitEditing={getPokemonSearch}

                />
                <Icon
                    name="search-outline"
                    color="grey"
                    size={30}
                    onPress={getPokemonSearch}
                />
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
});



