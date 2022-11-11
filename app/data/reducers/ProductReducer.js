import { Switch } from "react-native"
import {PRODUCTS_RESPONSE, PRODUCTS_SELECT} from "../actions/ProductActions"

export const initialState= {
    productList:[],
    selectProduto: null
}

export const productReducer = (store = initialState, actions) =>{
    switch (action.type) {
        case PRODUCTS_RESPONSE:
            return {...store, productList: action.value}
            break;
        case PRODUCTS_SELECT:
            return {...store, selectProduto: action.value}
        default:
            break;
    }
}