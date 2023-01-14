import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export const SearchScreen = () => {

  const [textValue, setValue] = useState('')
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
          value={textValue}
          onChangeText={setValue}

        />
        <Icon
          name="search-outline"
          color="grey"
          size={30}
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

