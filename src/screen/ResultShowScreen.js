import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id') // getParam คือรับค่าจาก ... เป็นคำเฉพาะของ navigation อยู่แล้ว
    /*
    // ลองเอาไว้เช็คไอดีของอันนั้นๆ ดูได้
    const id = navigation.getParam('id')
    console.log(id)
    */

    console.log(id)

    getBusinessResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data) // คล้ายๆ setState React โดย setResult รับค่า แสดงผลที่ result โดย response = yelp.getลิ้ง .data หรือข้อมูลที่รับมา
    }
    useEffect(() => {
        getBusinessResult(id)
    }, [])
    return (
        <View>
            <Text>Results Show</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultShowScreen