import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import IconBadge from 'react-native-icon-badge';

const CustomHeader = () => {

    const cartData = useSelector((state)=>state.cart);

    console.log(cartData)

  return (
    <View>
      <Text style={{color : "#000"}} >{cartData?.length}</Text>
    </View>
  )
}

export default CustomHeader;