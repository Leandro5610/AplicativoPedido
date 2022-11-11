
import React,{createContext, useReducer} from "react";
import {initialState, CardReducers} from '../../data/reducers/CardReducers'

export const ProductContext = createContext(initialState)

export default function CartProvider(props){

   const [cardState, cardDispatch] = useReducer(CardReducers, initialState)

   return(
    <ProductContext.Provider value={[cardState, cardDispatch]}>
        
        {props.children}
    </ProductContext.Provider>
   )
    
}