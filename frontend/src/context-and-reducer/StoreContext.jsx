import {createContext, useReducer} from 'react'
import { reducer } from 'react';
import { initialState } from './reducer';
// import { propTypes } from 'react-bootstrap/esm/Image';

export const StoreContext = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({children}) => {
    // right now its giving error but im going to do the eslint to stop the constant reminder
    // it works on the browser not sure why it keeps bothering me 

    const [state, dispatch] = useReducer(reducer, initialState)

    

    // const initialState = {
    //     products:[],
    //     total: 0,
    // }

    const addToCart = (product) => {
        const updatedCart = state.products;
        updatedCart.push(product);


        updatePrice(updatedCart);

        dispatch({
            type: "add to cart",
            payload: updatedCart,
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.name !== product.name);
        
        updatePrice(updatedCart);

        dispatch ({
            type: 'remove from cart',
            payload: updatedCart,
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
        removeFromCart,
    }


    return <StoreContext.Provider value ={{state, value}}>{children}</StoreContext.Provider>
}