/**
 * @format
 */

import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ProductProvider from './app/ui/providers/ProductProviders';
import CartProvider from './app/ui/providers/CartProviders';
const tema = {
    ...DefaultTheme,
    dark:true,
    colors:{
        ...DefaultTheme.colors,
        primary:'red'
    }
}
const secondTema = {
    ...DefaultTheme,
    dark:true,
    colors:{
        ...DefaultTheme.colors,
        primary:'red'
    }
}
export default function Main(){
    const [value, setValue] = useState(1)

    useEffect(()=>{
            setTimeout(()=> {
                setValue(2)
            }, 3000)
    },[])
    return(
        <PaperProvider theme={value === 1 ? tema: secondTema}>
            <ProductProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductProvider>
        </PaperProvider>
    
    )
}

AppRegistry.registerComponent(appName, () => Main);
