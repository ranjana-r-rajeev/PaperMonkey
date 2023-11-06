import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from "./constant";

export function add_to_cart(product){
    return{
        type:ADD_TO_CART,
        payload:product
    }
}
export function removeFromCart(id){
    return {
              type: REMOVE_FROM_CART,
              payload: id
    }
}
export function emptyCart(){
    return {
        type: REMOVE_ALL_FROM_CART,
        payload: []
}

}