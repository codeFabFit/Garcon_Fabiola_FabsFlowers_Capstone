// import { createContext } from "react";
// import { useReducer } from "react";
// // import { StoreProvider } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";


// export const Store = createContext();

// const initialState = {
//     cart: {
//         cartItems: [],
//     }
// };

// function reducer(state, action) {
//     switch(action.type){
//         case 'CART_ADD_ITEM':
//             return {
//                 ...state, 
//                     cart:{
//                      ...state.cart, 
//                      cartItems:[...state.cart.cartItems, action.payload],
//             },
//         }
//             default:
//                 return state;
//     }
// }
// StoreProvider.propTypes ={
//         children: propTypes.node.isRequired,
//     }
// export function StoreProvider(props) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const value = {state, dispatch};
    
//     return <Store.Provider value={value}>{props.children}</Store.Provider>

    
// }