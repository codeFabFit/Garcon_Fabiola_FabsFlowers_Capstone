import {createContext, useReducer} from 'react'
import { reducer } from 'react';
import { initialState } from './reducer';
// import { propTypes } from 'react-bootstrap/esm/Image';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product) => {
        const updatedCart = state.products;
        updatedCart.push(product);


        updatePrice(updatedCart);

        dispatch({
            type: "add",
            payload: updatedCart
        })
    }

    const removedFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.name !== product.name);
        
        updatePrice(updatedCart);

        dispatch ({
            type: 'remove',
            payload: updatedCart
        });
    }

    const updatePrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price
        })

        dispatch ({
            type: "updated price",
            payload: total
        })
    }


    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removedFromCart,
    }


    return <StoreContext.Provider value ={value}>{children}</StoreContext.Provider>
}