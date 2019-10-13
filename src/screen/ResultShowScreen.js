import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id') // getParam คือรับค่าจาก ... เป็นคำเฉพาะของ navigation อยู่แล้ว
    /*
    // ลองเอาไว้เช็คไอดีของอันนั้นๆ ดูได้
    console.log(id)
    */

    getBusinessResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data) // คล้ายๆ setState React โดย setResult รับค่า แสดงผลที่ result โดย response = yelp.getลิ้ง .data หรือข้อมูลที่รับมา
    }
    useEffect(() => {
        getBusinessResult(id)
    }, [])

    if(!result) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
            />
            <Text>Rating: {result.rating} stars</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin : 10,
        flex: 1
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10
    }
})

export default ResultShowScreen