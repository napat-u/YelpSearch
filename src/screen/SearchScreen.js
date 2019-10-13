import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

const SearchScreen = () => { //{ navigation } ที่เอาออกเพราะในหน้า ResultList ใช้ react-navigation { withNavigation } ช่วยเหลือในการนำเข้าข้อมูล
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults() // ดึงมาจากหน้า useResults.js โดยทำฟังก์ชันทำงานไว้และรีเทิร์นเป็น Array กลับมา

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }
    /*เนื่องจากว่าแอนดรอยมีมักจะแสดงผลตรงๆ ซึ่งต่างจาก ios ในการเลื่อนใช้ ScrollView ดังนั้นจึงใช้ flex เข้าช่วยเหลือ*/
    return (
        // เราสามารถใช้เป็น View style={{ flex: 1}} ได้ แต่ถ้าเรากังวลเรื่องการคลุมหรือปัญหา เราจะใช้ empty elements แบบนี้แทนก็ได้เช่นกัน
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}พ
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultList 
            results={filterResultsByPrice('$')} 
            title='Cost Effective' 
            //navigation={navigation}
            />
            <ResultList 
            results={filterResultsByPrice('$$')} 
            title='Bit Pricier' 
            //navigation={navigation}
            />
            <ResultList 
            results={filterResultsByPrice('$$$')} 
            title='Big Spender' 
            //navigation={navigation}
            />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen

/* เอาไปไว้ในหน้า useResults.js ในส่วนของ hook  เสมือนเป็นการสร้างไฟล์แยกไว้และดึงมาใช้อีกทีนึง โดยเป็นฟังก์ชันที่จะทำกับในหน้านี้
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    
    const searchApi = async (searchTerm) => {
        console.log('Test')
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term, //term: term (term แรก จาก Api ของเว็บ ส่วน term ที่สอง คือ term จาก const ข้างบน)
                    location: 'San Jose'
                }
            })
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMessage('Something went wrong')
        }
    }

    //Call searchApi when component is first rendered = BAD CODE! It get loop
    //searchApi('pasta')
    useEffect(() => {
        searchApi('pasta')
    }, []) //ดูกระบวนการได้จากรูปใน React Native Learning/use State
*/