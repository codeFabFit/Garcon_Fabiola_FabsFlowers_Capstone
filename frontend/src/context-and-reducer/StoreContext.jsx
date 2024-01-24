import {createContext, useReducer} from 'react'
import { initialState } from './reducer';
import reducer from './reducer'
import { propTypes } from 'react-bootstrap/esm/Image';
// import CartProduct from '../components/CartProduct';


// import { propTypes } from 'react-bootstrap/esm/Image';
// import { PropTypes } from "prop-types";


const StoreContext = createContext();

 

export default StoreContext;


// const userInfo = state;


 
export const StoreProvider = ({children})=>{
    // right now its giving error but im going to do the eslint to stop the constant reminder
    // it works on the browser not sure why it keeps bothering me 
StoreProvider.propTypes = {
        children: propTypes.node,
    };
    
    const [state, dispatch] = useReducer(reducer, initialState)

    
    const addToCart = (product) => {
        const updatedCart = [
            ...state.products, product];
        updatedCart.push(product);


        updatePrice(updatedCart);

        dispatch({
            type: "ADD_TO_CART",
            payload: updatedCart,
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.name !== product.name);
        
        updatePrice(updatedCart);

        dispatch ({
            type: 'REMOVE_FROM_CART',
            payload: updatedCart,
        });
    }

    const updatePrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price
        })

        dispatch ({
            type: "UPDATE_PRICE",
            payload: total
        })
    }

   const userSignIn = (userInfo) => {
    dispatch({
        type: "USER_SIGNIN",
        payload: userInfo,
    })
   }

   const userSignOut = () => {
    dispatch({
        type: "USER_SIGNOUT",
    })
   }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
        updatePrice,
        userSignIn,
        userSignOut,
    }

   

    return <StoreContext.Provider value ={{state, value}}>{children}</StoreContext.Provider>

    
}





// export const StoreProvider = ({children})=> {
//     const [state, dispatch]= useReducer(reducer, initialState)

//     const addToCart = (product) => {
//         const updatedCart = state.products.concat(product)
           
//             updatePrice(updatedCart)
//         dispatch({
//             type: "ADD_TO_CART",
//             payload:{
//                 products: updatedCart
//             }
//         })
//     }
    
//     const removeFromCart = (product) => {
//       const updatedCart =  state.products.filter((currentProduct) => currentProduct.name !== product.name)
//       updatePrice(updatedCart)
//             console.log(removeFromCart.product)

//       dispatch({
//         type: "REMOVE_FROM_CART",
//         payload:{
//             products: updatedCart
//         }

//     })
// const updatePrice = (products) => {
//     let total =0;
//     products.forEach((product) => (total += product.price));
    
//     dispatch({
//         type: "UPDATE_PRICE",
//         payload:{
//             products: updatedCart
//         }
// })

// }

// const value = {
//     total: state.total,
//     products: state.products,
//     addToCart,
//     removeFromCart
// }
// return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
// }}

// const CartProduct = () => {
//     const context = useContext(StoreContext)

//     if (context === undefined) {
//         throw new Error("useShop must be used within ShopContext")
//     }
//     return context;
// }