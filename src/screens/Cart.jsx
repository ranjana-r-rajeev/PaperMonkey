import { FlatList, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/Product';
import axios from 'axios'
import { emptyCart } from '../store/action';

const Cart = () => {

    const cartData = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const postData =async()=>{
        cartData.map(async(item)=>{
            try{
                const response=await axios.post('https://jsonplaceholder.typicode.com/posts',{
                    title:item?.name,
                    body:item?.description,
                    userId:item?.id
                })
                console.info(response.data)
            }catch(error){
                console.error(error)
            }
        });
        dispatch(emptyCart())
    }

  return (
    <ScrollView>
        {
            cartData?.length>0&&
            <FlatList
                data={cartData}
                renderItem={({item})=><Product product={item}/>}
                numColumns={2}
                ItemSeparatorComponent={()=><View style={{borderBottomWidth:0.5}}></View>}
                keyExtractor={item=>item.id.toString()}
            />
        }
        {
            cartData?.length>0 &&
            <Button title={"Place Order"} onPress={()=>postData()}/>
        }

    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({})