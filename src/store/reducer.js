import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART} from "./constant";

const defaultValue = [];

export const reducer = (state=defaultValue,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return[...state,action.payload]
        
        case REMOVE_FROM_CART:
            return state.filter((data) => data.id != action.payload);  
        
        case REMOVE_ALL_FROM_CART:
            return [...action.payload];
        
        default:
            return state;
    }                         
};
