import { StyleSheet, Text, View ,Button, Image} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../store/constant'
import { add_to_cart ,removeFromCart} from '../store/action'

const Product = ({product}) => {

  const { id, name, description, image, category, price } = product;
  const dispatch = useDispatch();

  const AddToCart = () => {
            dispatch(add_to_cart(product))
  }

  const RemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  const item = useSelector((state) => state.cart?.some((opt)=> opt.id == id));
          console.log(item)

  return (
    <View>
      <View style={{height:350, width:180, alignSelf:'center', alignItems:'center', padding:20}}>
      <Image
        source={{ uri: product.image }}
        style={{width: 100, height: 150, backgroundColor: 'grey'}}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      {/* <Text style={styles.text}>{category}</Text> */}
      <Text style={styles.text}>{price}</Text>
      {
        !item && 
      <Button style={{width:200, height:50}} title='Add to cart' onPress={()=> AddToCart()} /> ||
      <Button style={{width:200, height:50}} title='Remove from cart' onPress={()=> RemoveFromCart()} /> 
      }
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})