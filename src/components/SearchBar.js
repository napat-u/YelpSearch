import React from 'react'
import { View ,Text , StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons' 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle} >
            <AntDesign name='search1' style={styles.iconStyle} />
            <TextInput 
            autoCapitalize= 'none'
            autoCorrect= {false}
            style={styles.inputStyle} 
            placeholder='Search' 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 12
    }
})

export default SearchBar