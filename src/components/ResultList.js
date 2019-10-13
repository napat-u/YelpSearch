import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetail from './ResultDetail'
import { withNavigation } from 'react-navigation'

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return ( // When using withNavigation we need to communicate with screen that use 2nd argument to communicate. In this case we use ID to communicate
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id : item.id})}> 
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15

    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultList)