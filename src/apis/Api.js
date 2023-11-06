import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
    const url = 'https://jsonplaceholder.typicode.com'
    const [posts,setPost] = useState([])

    const getData = () => {
        axios({
            method:'GET',
            url: `${url}/posts`
        }).then(res=>console.log(res)).catch(err=>console.warn(err))
    }

    const postData =() =>{
        axios({
           method:'POST' 
        })
    }


    useEffect(()=>{
        getData()
    },[])

  return (
    <View>
      <Text>Api</Text>
    </View>
  )
}

export default Api

const styles = StyleSheet.create({})